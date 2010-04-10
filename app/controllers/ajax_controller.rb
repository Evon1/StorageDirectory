class AjaxController < ApplicationController
  
  skip_before_filter :init
  before_filter :validate_params
  before_filter :_get_model, :only => [:update, :destroy]
  before_filter :_get_model_class, :only => :get_attributes
  
  def get_all
    if (has_name = _get_model_class.first.respond_to?('name')) || _get_model_class.first.respond_to?('title')
      @models = _get_model_class.all(:order => (has_name ? 'name' : 'title'))
    else
      @models = _get_model_class.all
    end
    
    authorize_and_perform_restful_action_on_model @models.first.class.to_controller_str, 'index' do
      render :json => { :success => true, :data => @models }
    end
    
  rescue => e
    render :json => { :success => false, :data => e.message }
  end
  
  def get_attributes
    authorize_and_perform_restful_action_on_model @model_class.name.underscore.pluralize, 'index' do
      render :json => { :success => true, :data => @model_class.column_names }
    end
    
  rescue => e
    render :json => { :success => false, :data => e.message }
  end
  
  def get_partial
    model_class = params[:model].constantize
    @model = params[:id].blank? ? model_class.new : model_class.find(params[:id])
    render :partial => params[:partial], :locals => { params[:model].downcase.to_sym => @model }
    
  rescue => e
    render :text => "<div class='error'>#{e.message}</div>"
  end
  
  def update
    authorize_and_perform_restful_action_on_model @model.class.to_controller_str, 'update' do
      render :json => { :success => @model.update_attribute(params[:attribute], params[:value]) }
    end
    
  rescue => e
    render :json => { :success => false, :data => e.message }
  end
  
  def update_many
    errors = []
    
    params[:models].each do |val, hash|
      model = _get_model(hash[:model], hash[:id])
      
      authorize_and_perform_restful_action_on_model model.class.to_controller_str, 'update' do
        unless model.update_attribute(hash[:attribute], hash[:value])
          errors << "Error updating #{model.class.name} #{model.name_or_title}: #{model_errors(model, false)}"
        end
      end
    end
    
    response = "#{errors * ', '}"
    render :json => { :success => errors.empty?, :data => response }
  #rescue => e
  #  render :json => { :success => false, :data => "Error: #{e.message}" }
  end
  
  def destroy
    authorize_and_perform_restful_action_on_model @model.class.to_controller_str, 'destroy' do
      @model.destroy
      @model.image = nil if @model.respond_to?('image')
    
      render :json => { :success => _get_model.nil? }
    end
    
  rescue => e
    render :json => { :success => false, :data => e.message }
  end
  
  private
  
  def authorize_and_perform_restful_action_on_model(resource, action, &block)
    if current_user && current_user.has_permission?(resource, action, params)
      yield
    else
      render :json => { :success => false, :data => "You don't have permission to #{action_name} this #{object_in_question}" }
    end
  end
  
  def object_in_question
    (@model || @models.first).class.name rescue @model_class.name rescue 'Object'
  end
  
  def validate_params
    return if params[:model].nil?
  end
  
  def _get_model(model_str = nil, id = nil)
    @model_str = model_str unless model_str.blank?
    @model = _get_model_class(model_str).find(id || params[:id]) if _get_model_class.exists?(id || params[:id])
  end
  
  def _get_model_class(model_str = nil)
    @model_class ||= (model_str || @model_str || params[:model]).camelcase.constantize
  end
  
end
