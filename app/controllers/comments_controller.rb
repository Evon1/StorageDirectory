class CommentsController < ApplicationController
  before_filter :get_comment, :except => [:index, :new, :create]
  
  def index
    @comments = Comment.all
  end
  
  def show
  end
  
  def new
    @comment = Comment.new
  end

  def create
    @form = Form.find(params[:fid])
    
    unless params[:target_type].blank?
      @comment = params[:target_type].camelcase.constantize.find(params[:target_id]).comments.build(params[:comment])
    else
      get_active_model
      @comment = @active_model ? @active_model.comments.build(params[:comment]) : Comment.new(params[:comment])
    end
    
    @comment.user_id = current_user.id if current_user
    Notifier.deliver_comment_notification(@form.recipient, @comment, request.host) if @form.should_send_email? && @comment.valid?
    
    if @comment.save
      flash[:notice] = params[:target_type].blank? ? 'Thanks for the message! We\'ll get back to you soon' : "#{params[:target_type].titleize} comment created."
      current_user ? redirect_back_or_default(comments_path) : redirect_to(:back)
    else
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    if @comment.update_attributes(params[:comment])
      flash[:notice] = @comment.title + ' has been updated.'
      redirect_back_or_default(comments_path)
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @comment.destroy
      flash[:notice] = @comment.title + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @comment.title
    end
    
    redirect_to comments_path
  end

  private
  
  def get_comment
    @comment = Comment.find(params[:id])
  end
  
end
