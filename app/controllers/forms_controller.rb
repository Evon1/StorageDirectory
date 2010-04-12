class FormsController < ApplicationController
  before_filter :get_form, :except => [:index, :new, :create]
  before_filter :get_field, :only => [:new, :edit]
  
  def index
    @forms = Form.all
  end
  
  def show
  end
  
  def new
    @form = Form.new
  end

  def create
    @form = Form.new(params[:form])
    
    if @form.save
      flash[:notice] = @form.name + ' has been created.'
      redirect_back_or_default forms_path
    else
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @form.update_attributes(params[:form])
      flash[:notice] = @form.name + ' has been updated.'
      redirect_back_or_default forms_path
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @form.destroy
      flash[:notice] = @form.name + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @form.name
    end
    
    redirect_back_or_default forms_path
  end

  private
  
  def get_form
    @form ||= Form.find params[:id]
  end
  
  def get_field
    @field ||= Field.new :form_id => (@form.try(:id) || 0)
  end
  
end
