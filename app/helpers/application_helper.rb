# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  @@meta_tag_keys = '(keywords)|(description)|(google-site-verification)'
  def site_meta_tags
    ApplicationController.app_config.map do |name, content|
      "\n<meta name='#{name.to_s}' content='#{content}' />" if name.to_s =~ /#{@@meta_tag_keys}/i
    end
  end
  
  def page_name
    request.path.sub('/', '').gsub(/\W/, '_')
  end
  
  def declare_content_for # renders blocks in regions based on current page
    if controller_name == 'listings' && action_name == 'show'
      title = @listing.title.titleize
    else
      title = (@page ? @page.title  : controller_name.titleize).to_s
    end
    content_for :title, "#{title.blank? ? 'Manage - ' : title + ' - '}#{ApplicationController.app_config[:title]}"
    
    regions(false).each do |region|
      content_for region do
        @html = "<div class='region_#{region} region'>"
        
          render_region_top(region)
          render_all_blocks_in(region)
        
        @html << '</div>'
      end
    end
    
    @html
  end
  
  def render_region_top(region)
    case [controller_name, action_name]
    when ['pages', 'edit'], ['blocks', 'edit'] # show region labels when editing a page or block
      @html << label_tag(region, nil, :id => "#{region}_region_label", :class => 'region_label')
    end
  end
  
  def render_all_blocks_in(region)
    @html << '<ul class="block_sortable">'
    
    combine_global_and_local_blocks_for(region).each do |block|
      if block.is_local? # local block
        sortable_id = "BlocksModel_#{block.blocks_models.detect { |bm| bm.place == region.to_s }.id}"
      else
        sortable_id = "Block_#{block.id}"
      end
        
      @html << render(:partial => block, :locals => { :region => region.to_s, :sortable_id => sortable_id, :global => true })
    end
    
    @html << '</ul>'
  end
  
  def combine_global_and_local_blocks_for(region)
    blocks = @global_blocks.select { |b| b.show_in_all == region.to_s }
    
    ['page', 'post'].each do |model_name| # the types of models that can have blocks
      model_instance = eval("@#{model_name}")
      model_instance.blocks_for_region(region.to_s).each do |block|
        blocks << block
      end if model_instance
    end unless action_name == 'edit'
    
    # these blocks can be shown on regular restful pages rather than a page's or post's show action (custom page)
    # they require a controller and action attribute, comma separated to allow the block to be in multiple places
    Block.find_all_by_restful(true).each do |block|
      if block.restful_region == region.to_s && block.controller.split(/,\W?/).include?(controller_name) && block.action.split(/,\W?/).include?(action_name)
        blocks << block 
      end
    end
    
    blocks.sort_by do |b|
      if b.is_local?  # local block's position is stored in its join table
        b.blocks_models.detect { |bm| bm.place == region.to_s }.position
      else
        b.position
      end
    end
  end
  
  # => @param node = one of: Block, Page
  # => @param region = content_for yields in application layout
  # => @return string of widget html, sets up any javascript needed by widgets
  def add_widget_for(model, region)
    @widgets_js << "widgets/#{model.widget.title.downcase}"
    html = ''
    #raise [model, region].pretty_inspect
    #str << display_widget(model, region)
    
    html << setup_gallery(model.widget, region) if model.widget.gallery
    html << model.widget.content # return this
  end
  
  def setup_gallery(widget, region)
    content_tag(:script,
      "jQuery(function(){
        #{images_for_js(widget, region)};
        jQuery('#slideshow').GreyRobotSlideShow();
      });", 
      :type => 'text/javascript') + '<div id="slideshow"></div>'
  end
  
  # Renders the models_views inside the block partial
  # Views define what model records to list, and by what scope. Scoping a view retrieves the records of view's
  # model that are owned by either the active instance (e.g. @page, or @block. in the show action of the model) 
  # or a specific instance as defined by the view's owner_id
  #
  # Example 1
  #  a view whose model is 'comment' will display all comments. Using scope 'post' with no owner_id will 
  # retrieve the comments that are owned by the active post instance, given the view will be rendered in a block
  # or page where that instance variable is set (in this case: @post). For this comment example to work we would have to
  # assign the view to a block and place the block in any post. The view will then render that post's comments
  #
  # Example 2
  #  a view whose model is 'post' will display all posts. Using scope 'user' and choosing a user from the resulting
  # dropdown menu in the ui will retrieve all the posts of that specific user. We can then place this view anywhere and it
  # will render all posts by that user if they exist, otherwise it will render all posts.
  def render_views_in_this(block)
    html = ''
    block.views.each do |view|
      models_view = view.models_view(block)
      
      if view.model_name =~ /(tag)|(image)/ && !view.scope.blank?
        scope_model = view.owner_id.blank? ? eval("@#{view.scope}") : model_class(view.scope).find(view.owner_id)
        data = eval("scope_model.#{view.model_name.pluralize}")
        
      elsif view.model_name == 'post' &&  view.scope == 'tag'
        tag = view.owner_id.blank? ? eval("@tag") : Tag.find(view.owner_id)
        data = Post.find(:all, :conditions => models_view.conditions).select { |p| p.tags.map(&:name).include? tag.name }
        data = data.paginate(:per_page => 15, :page => params[:page]) if models_view.paginate
        
      else
        data = view.model.all(view_find_options(view, models_view))
      end
      
      html << render(:partial => "#{view_types_dir}#{models_view.view_type}", :locals => { :data => data })
    end
    html
  #rescue
  #  resource = block.class.to_controller_str
  #  block_str = current_user && current_user.has_permission?(resource, 'edit', params) ? "<a href='/#{resource}/#{block.id}/edit'>#{block.title}</a>" : block.title
  #  "<div class='flash error'>And error occured loading view in block: #{block_str}</div>"
  end
  
  def render_forms_in_this(block)
    html = ''
    block.enabled_forms.each do |form|
      html << render(:partial => 'forms/build', :locals => { :form => form })
    end
    html
  end
  
  def view_find_options(view, models_view)
    option_hash = {}
    option_hash.store(:select,     models_view.fields)          unless models_view.fields.blank?
    option_hash.store(:order,      models_view.order)           unless models_view.order.blank?
    option_hash.store(:limit,      models_view.limit)           unless models_view.limit.blank?
    option_hash.store(:conditions, scope_conditions_hash(view)) unless view.scope.blank?
    option_hash
  end
  
  def scope_conditions_hash(view)
    option_hash = {}
    
    unless view.owner_id.blank? # specific model
      modelClass = model_class(view.scope)
      active_model = modelClass.find(view.owner_id) if modelClass.exists?(view.owner_id)
    else # active model
      active_model = eval("@#{view.scope}")
    end
    
    if assoc = view.model.column_names.detect { |k| k =~ /.*_type$/i } # polymorphic models
      assoc.gsub!('_type', '')
      option_hash = { "#{assoc}_id" => active_model.id, "#{assoc}_type" => view.scope.camelcase }
    else
      option_hash = { "#{view.scope}_id" => active_model.id }
    end
  end
  
  def render_form_hidden_fields(form)
    html =  hidden_field_tag(:update_element, form.field_set_id)
    html << hidden_field_tag(:fid, form.id)
    html << content_tag(:div, text_field_tag(:hack_me, ''), :class => 'hhh') if form.use_reverse_captcha
    
    begin
      unless form.scope.blank?
        scope_class = model_class(form.scope)
        html << hidden_field_tag(:target_type, form.scope) unless scope_class.nil?
        
        # to verify the record exists
        scope_instance = form.target_id.blank? ? eval("@#{form.scope}") : scope_class.find(form.target_id)
        
        html << hidden_field_tag(:target_id, scope_instance.id) unless scope_instance.nil?
      end
    rescue
      raise ["#{__FILE__}:#{__LINE__}: in render_form_hidden_field(form)", params, form, scope_class, scope_instance].pretty_inspect
    end
    
    html
  end
  
  # processes any ERB tags in the model's content field, binding instance variables to it
  def render_model_content(model)
    if model.is_using_extra_options?
      if model.use_placeholders? && (placeholders = /\[(\w*):(.*)\]/i.match(model.content)) # anything in brackets with a colon inside => [model:title_or_id]
        model.content = set_content_in_placeholders(model, placeholders)
      end
      
      ERB.new(model.content).result(binding)
    else
      model.content
    end
  end
  
  def set_content_in_placeholders(model, placeholders)
    placeholder, model_class, title_or_id = placeholders[0], placeholders[1], placeholders[2]
    
    if models(false).include? model_class
      mClass = model_class.camelize.constantize
      
      if title_or_id.is_a? String
        submodel = mClass.columns.map(&:name).include?('title') ? mClass.find_by_title(title_or_id) : mClass.find_by_name(title_or_id)
      else
        submodel = mClass.find(title_or_id)
      end
      
      case model_class
      when 'block'
        replacement = render(:partial => submodel, :locals => { :region => 'custom', :global => false })
      when 'form'
        replacement = render(:partial => 'forms/build', :locals => { :form => submodel })
      end
      
      model.content.sub placeholder, replacement
    else
      model.content
    end
  end
  
  def render_model_helptext(controller_name)
    return if current_user.nil?
    render(:partial => 'helptexts/helptext', :locals => { :class_helptext => model_class(controller_name).helptext })
  end
  
  def images_for_js(widget, region)
    size = ['left', 'right'].include?(region) ? :thumb : :original
    images = widget.gallery.images.map { |img| img.image.url(size)  }
    "SlideShowImages = #{images.to_json}"
  end
  
  # => @param flash: flash message object
  def display_message(flash)
    if flash.keys.any? { |k| k.to_s =~ /notice|warning|error/ }
      type = flash.keys.detect { |k| k.to_s =~ /notice|warning|error/ }
      "<div class='flash #{type}'>#{flash[type]}</div>"
    end
  end
  
  def blocks_model_object(block, model)
    bm = model.blocks_models
    bm.find_by_block_id(block.id) || bm.new
  end
  
  def models_module_object(model)
    model.module || ModelsModule.new
  end
  
  def show_title(model)
    "<h2>#{model.title}</h2>" if (model.respond_to?(:show_title) && model.show_title) || !model.respond_to?(:show_title)
  end
  
  def contextual_index_view_title(title = nil)
    return title unless title.nil?
    
    str = ''
    if !params[:model].blank?
      str << "#{params[:model].titleize} Tagged With \"#{params[:tag]}\""
    elsif !params[:user_id].blank?
      str << @user.name.possessive + ' ' + controller_name.titleize
    else
      str << controller_name.titleize
    end
    str
  rescue
    controller_name.titleize
  end
  
  # return the actual class object of a model
  def model_class(model_or_controller_name)
    # site settings isn't a model so it isn't defined
    @model_class = model_or_controller_name.singular.camelcase.constantize rescue nil
  end
  
  def model_form_heading
    str = params[:user_id].blank? ? '' : ' for ' + @user.name
    "#{action_name} #{controller_name.singular}".titleize + str
  rescue
    "#{action_name} #{controller_name.singular}".titleize
  end
  
  # monkey patched parameterize method. see: /lib/utility_methods.rb:31
  def nice_page_path(page)
    "/#{page.title.parameterize}"
  end
  
  # index action path for a resource
  def model_index_path(name, options = {}) 
    eval "#{name}_path(options)"
  end
  
  def edit_model_path(model, options = {})
    eval "edit_#{model_name(model)}_path(model, options)"
  rescue
    "##{model_name(model)}"
  end
  
  def new_model_path(name, options = {})
    eval "new_#{name.downcase.singular}_path(options)"
  end
  
  # a resource instance path
  def model_path(model, options = {})
    if model.is_a? Link
      dynamic_link_path(model, options)
    else
      eval "#{model_name(model)}_path(model, options)"
    end
  end
  
  # return a either a links absolute path or get the target resource path
  def dynamic_link_path(link, options = {})
    if link.relative && !link.target_id.blank?
      model_instance = model_class(link.resource).find(link.target_id)
      model_instance.is_a?(Page) ? nice_page_path(model_instance) : model_path(model_instance, options)
    elsif link.relative && link.target_id.blank?
      model_index_path(model_name(link.resource), options)
    else
      link.path
    end
  end
  
  # link title for resource crud action
  def model_crud_title(crud, name)
    "#{crud} #{name.singular}".titleize
  end
  
  # return a string name of a resource, require a model or array of models
  def model_name(models)
    models.kind_of?(Array) ? models.first.class.name : models.class.name.underscore.singular
  end
  
  # takes an AR object and returns the controller name for it
  def model_controller(model)
    model.class.name.downcase.pluralize
  end
  
  # the title or name of an instance of a resource
  def model_name_or_title(model)
    model.respond_to?('title') ? model.title : model.name
  end
  
  def model_class_and_id(model)
    "#{model.class.name}_#{model.id}"
  end
  
  # form a string to set the id of html elements that wrap a resource
  def model_id(model)
    "#{model.class.name}_#{model.id}"
  end
  
  def anchor(name)
    "<a name='#{name}' id='#{name}'></a>"
  end
  
  def return_here_and(anchor = '') # build params for the path helper, mainly used in conjunction with anchor actions
    { :return_to => (anchor.blank? ? request.request_uri : "#{request.request_uri}##{anchor}") }
  end
  
  def active_page(resource_or_path) # sets the active class on links
    if resource_or_path.is_a? String # string path
      current_controller?(resource_or_path)  ? 'active' : ''
    else # model instance, also check if the model title is the same as the path without the preceding / (forward slash)
      current_page?(url_for(resource_or_path)) || (resource_or_path.name_or_title.parameterize.downcase == request.path[1, 100].parameterize.to_s) ? 'active' : ''
    end
  end
  
  # check if we're on the index path of a resource
  def current_controller?(path)
    "/#{controller_name}" == path
  end
  
  def current_model
    @current_model ||= eval "@#{controller_name.singularize}"
  end
  
  def is_ignored_attribute?(attribute) # skip these when printing out a model's attributes
    ['created_at', 'updated_at'].include? attribute
  end
  
  def option_tags(array, selected = nil, prompt = nil)
    option_tags = prompt.nil? ? [] : [content_tag(:option, prompt, :value => '')]
    array.each do |a|
      options = { :value => a }
      options.store(:selected, 'selected') if should_be_selected(a, selected)
      option_tags << content_tag(:option, a.to_s.titleize, options)
    end
    option_tags
  end
  
  def should_be_selected(a, selected)
    selected.is_a?(Array) ? selected.include?(a.to_s) : selected.to_s == a.to_s
  end
  
  def display_nice(attribute, value)
    case attribute
    when /_id$/ then name_of_associated_model(attribute, value)
    else display_label_and_value(attribute, value) 
    end
  end
  
  # get the name or title of the instance of the associated model
  def name_of_associated_model(attribute, id)
    attr_cap = attribute.sub(/_id$/, '').capitalize
    model_class = attr_cap.constantize
    model = model_class.find(id)
    str = label_tag 'Owned By'
    str << model_name_or_title(model)
  rescue
    attr_cap
  end
  
  def display_label_and_value(attribute, value, escape = false) 
    str = label_tag attribute unless attribute =~ /(description)/i
    (str ||= '') << '<div class="html_wrap">' + h(value.to_s.truncate) + '</div>'
  end
  
  def assoc_partial(assoc_name)
    "#{assoc_name.underscore}/#{assoc_name.underscore.singular}_fields"
  end
  
  def get_active_model_by_path(models)
    model = models.detect do |model|
      current_page?(url_for(model)) || (eval("@#{controller_name.singular}") == model && controller_name.singular == model_name(model))
    end unless models.blank?
  end
  
  def not_on_home_page
    !params[:title] || params[:title] != 'home'
  end
  
  def paginated?(data = {})
    data.respond_to? :total_pages || defined? @paginated && @paginated
  end
  
end