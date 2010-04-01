class UsersController < ApplicationController
  before_filter :get_user, :only => [:show, :edit, :update, :destroy]
  before_filter :require_user, :except => [:new, :create]
  
  def index
    @users = User.all_for_index_view
    @roles = Role.all
  end
  
  def show
  end
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(params[:user])
    
    if @user.save
      flash[:notice] = 'Account registered!'
      redirect_back_or_default user_path(@user)
    else
      render :action => :new
    end
  end

  def edit
    @roles = Role.all
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
  
  def get_user
    @user = User.find(params[:id])
  end
  
end
