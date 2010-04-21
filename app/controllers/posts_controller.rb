class PostsController < ApplicationController
  before_filter :get_post, :only => [:show, :edit, :update, :destroy]
  before_filter :get_blocks, :only => [:new, :edit]
  before_filter :get_modules, :only => [:new, :edit]
  before_filter :load_grey_module, :only => :show
  
  def index
    @posts = Post.all_for_index_view
  end

  def show
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(params[:post])
    
    if @post.save
      flash[:notice] = @post.title + ' has been created.'
      redirect_to posts_path
    else
      render :action => 'edit'
    end    
  end

  def edit
  end

  def update
    if @post.update_attributes(params[:post])
      flash[:notice] = @post.title + ' has been updated.'
      redirect_to :action => 'show'
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @post.destroy
      flash[:notice] = @post.title + ' DESTROYED!'
      redirect_to posts_path
    else
      flash[:error] = 'Error destroying ' + @post.title
      render :action => 'edit'
    end
  end
  
  private
  
  def get_post
    @post = Post.find(params[:id])
  end

end
