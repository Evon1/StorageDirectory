class PagesController < ApplicationController
  before_filter :get_page, :only => [:show, :edit, :update, :destroy]
  before_filter :get_blocks, :only => [:new, :edit]
  
  def index
    @pages = Page.all_for_index_view
  end

  def show
  end

  def new
    @page = Page.new
  end

  def create
    @page = Page.new(params[:page])
    
    if @page.save
      flash[:notice] = @page.title + ' has been created.'
      redirect_to root_path
    else
      get_associations
      render :action => 'edit'
    end    
  end

  def edit
  end

  def update
    if @page.update_attributes(params[:page])
      flash[:notice] = @page.title + ' has been updated.'
      redirect_to :action => 'show'
    else
      get_associations
      render :action => 'edit'
    end
  end

  def destroy
    if @page.destroy
      flash[:notice] = @page.title + ' DESTROYED!'
      redirect_to root_path
    else
      flash[:error] = 'Error destroying ' + @page.title
      render :action => 'edit'
    end
  end
  
  private
  
  def get_page
    # monkey patched parameterize method. see: /lib/utility_methods.rb:31
    @page = params[:title] ? Page.all.detect { |page| page.title.parameterize == params[:title] } : (Page.find(params[:id]) rescue nil)
    
    if @page.nil?
      flash[:warning] = "Page Not Found"
      @page = Page.find_by_title('Home')
    end
  end

end
