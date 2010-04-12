class UserSessionsController < ApplicationController
  
  skip_before_filter :authorize_user
  before_filter :require_no_user, :only => :new
  before_filter :require_user, :only => :destroy
  
  def new
    @user_session = UserSession.new
  end
  
  def create
    @user_session = UserSession.new(params[:user_session])
    
    if @user_session.save
      flash[:notice] = "Hello #{current_user.name}"
      
      if current_user.last_login_at.blank?
        flash[:notice] << ", welcome to #{@@app_config[:title]}!"
      else
        flash[:notice] << ", welcome back.<br />You last logged in on #{current_user.last_login_at.asctime}"
      end
      
      redirect_back_or_default user_path(current_user)
    else
      render :action => :new
    end
  end
  
  def destroy
    current_user_session.destroy
    session.clear
    flash[:notice] = 'Logout successful!'
    redirect_to root_path
  end

end
