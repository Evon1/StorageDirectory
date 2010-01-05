class AjaxController < ApplicationController
  
  skip_before_filter :init
  before_filter :validate_params
  before_filter :get_model, :only => [:update, :destroy]
  
  def get_all
    if (has_name = _get_model_class.first.respond_to?('name')) || _get_model_class.first.respond_to?('title')
      @models = _get_model_class.all(:order => (has_name ? 'name' : 'title'))
    else
      @models = _get_model_class.all
    end
    
    render :json => { :success => true, :data => @models }
    
  rescue => e
    render :json => { :success => false, :data => _prep_error(e) }
  end
  
  def update
    @model = _get_model_class.find(params[:id])
    render :json => { :success => @model.update_attribute(params[:attribute].to_sym, params[:value]) }
  rescue => e
    render :json => { :success => false, :data => _prep_error(e) }
  end
  
  def destroy
    @model.destroy
    @model.image = nil if @model.respond_to?('image')
    
    render :json => { :success => get_model.nil? }
  rescue => e
    render :json => { :success => false, :data => _prep_error(e) }
  end
  
  private
  
  def validate_params
    return if params[:model].nil?
  end
  
  def get_model
    @model = _get_model_class.find(params[:id]) if _get_model_class.exists?(params[:id])
  end
  
  def _get_model_class
    @model_class ||= params[:model].camelcase.constantize
  end
  
  def _prep_error(e)
    e.pretty_inspect.gsub(/^(#<)|>$/, '')
  end
  
end
