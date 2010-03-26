class RolesController < ApplicationController
  before_filter :get_models, :only => [:index, :show, :new, :edit]
  before_filter :get_model, :only => [:show, :edit, :update, :destroy]
  
  def index
  end

  def show
  end

  def new
    @role = Role.new
  end

  def create
    @role = Role.new(params[:roles])
    
    if @role.save
      flash[:notice] = "#{@roles.title} has been created."
      redirect_back_or_default roles_path
    else
      render :action => 'edit'
    end    
  end

  def edit
  end

  def update
    if @role.update_attributes(params[:role])
      flash[:notice] = @role.title + ' has been updated.'
      redirect_back_or_default :action => 'show'
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @role.destroy
      flash[:notice] = @role.title + ' DESTROYED!'
      redirect_back_or_default roles_path
    else
      flash[:error] = 'Error destroying ' + @role.title
      render :action => 'edit'
    end
  end

end
