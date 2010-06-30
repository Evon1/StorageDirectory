class UsersController < ApplicationController
  before_filter :get_model, :only => [:show, :edit, :update, :destroy]
  before_filter :get_roles, :only => [:index, :new, :edit, :create]
  before_filter :get_default_role, :only => :new
  before_filter :require_user, :except => [:new, :create]
  
  def index
    @users = User.all_for_index_view
  end
  
  def show
  end
  
  def new
    @user = User.new
  end
  
  def create
    raise params.pretty_inspect
    @form = Form.find(params[:fid]) unless params[:fid].blank?
    @user = User.new(params[:user])
    role = Role.find @user.role_id
    
    # skip validation for subscribers, they dont need passwords
    if @user.save((role.title !~ /subscriber/i))
      Notifier.deliver_subscriber_notification(@form.recipient, @user, request.host) if @form && @form.should_send_email?
      
      flash[:notice] = 'Great! Thanks for signing up!'
      redirect_back_or_default user_path(@user)
    else
      render :action => :new
    end
  end

  def edit
  end
  
  def update
    if @user.update_attributes(params)
      flash[:notice] = "#{@user.name.possessive} account has been updated!"
      redirect_back_or_default user_path(@user)
    else
      render :action => :edit
    end
  end
  
  def destroy
    if @user.destroy
      flash[:notice] = @user.name + ' DESTROYED!'
      redirect_to users_path
    else
      flash[:error] = 'Error destroying ' + @user.name
      render :action => 'edit'
    end
  end
  
  private
  
  def get_roles
    @roles = is_admin? ? Role.all : Role.non_admin_roles
  end
  
end
