class VirtualModelsController < ApplicationController
  
  before_filter :get_virtual_model, :except => [:index, :new, :create]
  
  def index
    @virtual_models = VirtualModel.all_for_index_view
  end

  def show
  end

  def new
    @virtual_model = VirtualModel.new
  end

  def create
    @virtual_model = VirtualModel.new(params[:virtual_model])
    
    if @virtual_model.save
      flash[:notice] = 'virtual_model has been created.'
      redirect_back_or_default virtual_models_path
    else
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @virtual_model.update_attributes(params[:virtual_model])
      flash[:notice] = 'virtual_model has been updated.'
      redirect_to virtual_models_path
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @virtual_model.destroy
      flash[:notice] = 'virtual_model DESTROYED!'
      redirect_to virtual_models_path
    else
      flash[:error] = 'Error destroying virtual_model'
      render :action => 'edit'
    end
  end
  
  private
  
  def get_virtual_model
    @virtual_model = VirtualModel.find(params[:id])
  end
  
end
