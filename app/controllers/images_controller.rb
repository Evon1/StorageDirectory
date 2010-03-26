class ImagesController < ApplicationController
  before_filter :get_image, :only => [:show, :edit, :update, :destroy]
  
  def index
    @images = Image.all_for_index_view
  end
  
  def show
  end
  
  def new
    @image = Image.new
  end

  def create
    @image = Image.new(params[:image])

    if @image.save(params)
      flash[:notice] = @image.title + ' has been created.'
    else
      flash[:error] = model_errors(@image)
    end
    
    redirect_back_or_default images_path
  end

  def edit
  end

  def update
    if @image.update_attributes(params[:image])
      flash[:notice] = @image.title + ' has been updated.'
    else
      flash[:error] = model_errors(@image)
    end
    
    redirect_back_or_default images_path
  end

  def destroy
    if @image.destroy
      @image.image.destroy
      flash[:notice] = @image.title + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @image.title
    end
    
    redirect_back_or_default images_path
  end

  private
  
  def get_image
    @image = Image.find(params[:id])
  end
  
end
