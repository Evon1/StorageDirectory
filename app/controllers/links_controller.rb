class LinksController < ApplicationController
  before_filter :get_link, :only => [:show, :edit, :update, :destroy]
  before_filter :get_associations, :only => [:new, :edit]
  
  def index
    @links = Link.all_for_index_view
  end
  
  def show
  end
  
  def new
    @link = Link.new
  end

  def create
    @link = Link.new(params[:link])
    
    if @link.save
      flash[:notice] = @link.title + ' has been created.'
      redirect_to links_path
    else
      get_associations
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @link.update_attributes(params[:link])
      flash[:notice] = @link.title + ' has been updated.'
      redirect_to links_path
    else
      get_associations
      render :action => 'edit'
    end
  end

  def destroy
    if @link.destroy
      flash[:notice] = @link.title + ' DESTROYED!'
      redirect_to links_path
    else
      flash[:error] = 'Error destroying ' + @link.title
      render :action => 'edit'
    end
  end

  private
  
  def get_link
    @link = Link.find(params[:id])
  end
  
  def get_associations
    @link_groups = LinkGroup.all
  end

end
