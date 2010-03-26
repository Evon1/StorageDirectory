# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  def declare_content_for # renders blocks in regions based on current page
    title = (@page ? @page.title  : @controller_name.titleize).to_s
    content_for :title, "#{title.blank? ? 'Manage - ' : title + ' - '}GreyCMS"
    
    regions(false).each do |region|
      content_for region do
        @html = "<div class='region_#{region} region'>"
        
          render_region_top(region)
          render_global_blocks_for(region)
          render_local_blocks_for(region.to_s)

        @html << '</div>'
      end
    end
    
  end
  
  def render_region_top(region)
    case [controller_name, action_name]
      when ['pages', 'edit'], ['blocks', 'edit'] # show region labels when editing a page or block
        @html << label_tag(region, nil, :id => "#{region}_region_label", :class => 'region_label')
    end
  end
  
  def render_global_blocks_for(region)
    @global_blocks.select { |b| b.show_in_all == region.to_s }.each do |block|
      @html << render(:partial => block, :locals => { :region => block.show_in_all, :global => true })
    end
  end
  
  # => @param region = content_for yields in application layout
  # => @return string of html content and any widgets html and javascript needed
  def render_local_blocks_for(region) # returns html of all the blocks for a page's regions
    blocks_models.each do |model_name|
      model_instance = eval("@#{model_name}")
      
      # => render the models block content, models_views, and widgets
      model_instance.blocks_for_region(region).each do |block|
        @html << render(:partial => block, :locals => { :region => region, :global => false })
      end if model_instance
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
  
<<<<<<< HEAD
  # ---------------------------
=======
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
  # Renders the models_views inside the block partial
  # Views define what model records to list, and by what scope. Scoping a view retrieves the records of view's
  # model that are owned by either the active instance (e.g. @page, or @block. in the show action of the model) 
  # or a specific instance as defined by the view's owner_id
<<<<<<< HEAD
  #
=======
  
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
  # Example 1: ---------------------------
  #  a view whose model is 'comment' will display all comments. Using scope 'post' with no owner_id will 
  # retrieve the comments that are owned by the active post instance, given the view will be rendered in a block
  # or page where that instance variable is set (in this case: @post). For this comment example to work we would have to
  # assign the view to a block and place the block in any post. The view will then render that post's comments
<<<<<<< HEAD
  #
=======
  
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
  # Example 1: ---------------------------
  #  a view whose model is 'post' will display all posts. Using scope 'user' with and choosing a user from the resulting
  # dropdown menu in th ui will retrieve all the posts of that specific user. We can then place this view anywhere and it
  # will render all posts by that user if they exist, otherwise it will render all posts.
  def render_views_in_this(block)
    html = ''
    block.views.each do |view|
      models_view = view.models_view(block)
      
      if view.model_name =~ /(tag)|(image)/ && !view.scope.blank?
        scope_model = view.owner_id.blank? ? eval("@#{view.scope}") : model_class(view.scope).find(view.owner_id)
        data = eval("scope_model.#{view.model_name.pluralize}")
      else
        data = view.model.all(view_find_options(view, models_view))
      end
      
      html << render(:partial => "views/#{models_view.view_type}", :locals => { :data => data })
    end
    html
  rescue => e
    #raise [@view, @option_hash,e].pretty_inspect
  end
  
  def render_forms_in_this(block)
    html = ''
    block.enabled_forms.each do |form|
      html << render(:partial => "forms/build", :locals => { :form => form })
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
<<<<<<< HEAD
    html = hidden_field_tag(:update_element, form.field_set_id)
=======
    html =  hidden_field_tag(:update_element, form.field_set_id)
    html << hidden_field_tag(:fid, form.id)
    html << content_tag(:div, text_field_tag(:hack_me, ''), :class => 'hhh') if form.use_reverse_captcha
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
    
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
<<<<<<< HEAD
=======
    
    html
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
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
  
  # => @param flash = flash message object
  def display_message(flash)
    if flash.keys.any? { |k| k.to_s =~ /notice|warning|error/ }
      type = flash.keys.detect { |k| k.to_s =~ /notice|warning|error/ }
      "<div class='#{type}'>#{flash[type]}</div>"
    end
  end
  
  def blocks_model_object(block, model)
    bm = model.blocks_models
    bm.find_by_block_id(block.id) || bm.new
  end
  
<<<<<<< HEAD
=======
  def show_title(model)
    "<h2>#{model.title}</h2>" if (model.respond_to?(:show_title) && model.show_title) || !model.respond_to?(:show_title)
  end
  
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
  def model_class(model_or_controller_name)
    model_or_controller_name.singular.camelcase.constantize
  end
  
  def model_form_heading
    "#{action_name} #{controller_name.singular}".titleize
  end
  
  def nice_page_path(page)
    # monkey patched parameterize method. see: /lib/utility_methods.rb:31
    "/#{page.title.parameterize}"
  end
  
  def model_index_path(name, options = {}) # index action for a resource
    eval "#{name}_path(options)"
  end
  
  def edit_model_path(model, options = {})
    eval "edit_#{model_name(model)}_path(model, options)"
  rescue # the role model doesn't have routes
    "##{model_name(model)}"
  end
  
  def new_model_path(name, options = {})
    eval "new_#{name.downcase.singular}_path(options)"
  end
  
  def model_path(model, options = {}) # a resource's named route
    eval "#{model_name(model)}_path(model, options)"
  end
  
  def model_crud_title(crud, name) # link title for resource crud action
    "#{crud} #{name.singular}".titleize
  end
  
  def model_name(models) # require a model or array of models
    models.kind_of?(Array) ? models.first.class.name : models.class.name.underscore.singular
  end
  
  def model_name_or_title(model)
    model.respond_to?('title') ? model.title : model.name
  end
  
  def model_id(model) # form a string to set the id of html elements that wrap a resource
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
<<<<<<< HEAD
    else # model instance
      current_page?(url_for(resource_or_path)) ? 'active' : ''
=======
    else # model instance, also check if the model title is the same as the path without the preceding / (forward slash)
      current_page?(url_for(resource_or_path)) || (resource_or_path.name_or_title.parameterize.downcase == request.path[1, 100].parameterize.to_s) ? 'active' : ''
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
    end
  end
  
  def current_controller?(path)
    "/#{controller_name}" == path
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
  
  def name_of_associated_model(attribute, id)
    attr_cap = attribute.sub(/_id$/, '').capitalize
    model_class = attr_cap.constantize
    model = model_class.find(id)
    name = model.respond_to?('name') ? model.name : model.title
    str = label_tag 'Owned By'
    str << name
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
  
<<<<<<< HEAD
end
=======
end
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
