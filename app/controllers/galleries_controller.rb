class GalleriesController < ApplicationController
  before_filter :get_gallery, :only => [:show, :edit, :update, :destroy]
  before_filter :get_associations, :only => [:new, :edit]
  
  def index
    @galleries = Gallery.all_for_index_view
  end

  def show
  end

  def new
    @gallery = Gallery.new
  end

  def create
    @gallery = Gallery.new(params[:gallery])
    
    if @gallery.save
      flash[:notice] = @gallery.title + ' has been created.'
      redirect_to galleries_path
    else
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @gallery.update_attributes(params[:gallery])
      flash[:notice] = @gallery.title + ' has been updated.'
      redirect_to galleries_path
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @gallery.destroy
      flash[:notice] = @gallery.title + ' DESTROYED!'
      redirect_to galleries_path
    else
      flash[:error] = 'Error destroying ' + @gallery.title
      render :action => 'edit'
    end
  end
  
  private
  
  def get_gallery
    @gallery = Gallery.find(params[:id])
    @image = Image.new if action_name =~ /^e.+(r|y)$/
  end
  
  def get_associations
    @images = Image.all
  end
  
end