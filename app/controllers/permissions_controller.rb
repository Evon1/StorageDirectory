class PermissionsController < ApplicationController
  before_filter :get_models, :only => [:index, :show, :new, :edit]
  before_filter :get_model, :only => [:show, :edit, :update, :destroy]
  
  def index
  end

  def show
  end

  def new
    @permission = Permission.new
  end

  def create
    results = Permission.create_or_update_many(params[:permissions])
    @permissions = results[:permissions]
    
    if @permissions
      flash[:notice] = "#{@permissions.size} #{@permissions.size > 1 ? 'permissions have' : 'permission has'} been processed.<br />" +
                       "#{results[:updated]} updated, and #{results[:created]} created."
      redirect_back_or_default permissions_path
    else
      render :action => 'edit'
    end    
  end

  def edit
  end

  def update
    if @permission.update_attributes(params[:permission])
      flash[:notice] = @permission.title + ' has been updated.'
      redirect_back_or_default :action => 'show'
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @permission.destroy
      flash[:notice] = @permission.title + ' DESTROYED!'
      redirect_back_or_default permissions_path
    else
      flash[:error] = 'Error destroying ' + @permission.title
      render :action => 'edit'
    end
  end

end
