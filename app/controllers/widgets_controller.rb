class WidgetsController < ApplicationController
  before_filter :get_widget, :only => [:show, :edit, :update, :destroy]
  before_filter :get_associations, :only => [:new, :edit]
  
  def index
    @widgets = Widget.all
  end

  def show
  end

  def new
    @widget = Widget.new
  end

  def create
    @widget = Widget.new(params[:widget])
    
    if @widget.save
      flash[:notice] = @widget.title + ' has been created.'
      redirect_back_or_default widgets_path
    else
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @widget.update_attributes(params[:widget])
      flash[:notice] = @widget.title + ' has been updated.'
      redirect_back_or_default widgets_path
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @widget.destroy
      flash[:notice] = @widget.title + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @widget.title
    end
    
    redirect_back_or_default widges_path
  end
  
  private
  
  def get_widget
    @widget = Widget.find(params[:id])
  end
  
  def get_associations
    @galleries = Gallery.all
  end
  
end