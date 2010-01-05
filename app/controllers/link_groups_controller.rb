class LinkGroupsController < ApplicationController
  before_filter :get_link_group, :only => [:show, :edit, :update, :destroy]
  
  def index
    @link_groups = LinkGroup.all_for_index_view
  end
  
  def show
  end
  
  def new
    @link_group = LinkGroup.new
  end

  def create
    @link_group = LinkGroup.new(params[:link_group])
    
    if @link_group.save
      flash[:notice] = @link_group.name + ' has been created.'
    else
      flash[:error] = model_errors(@link_group)
    end
    
    redirect_back_or_default link_groups_path
  end

  def edit
  end

  def update
    if @link_group.update_attributes(params[:link_group])
      flash[:notice] = @link_group.name + ' has been updated.'
    else
      flash[:error] = model_errors(@link_group)
    end
    
    redirect_back_or_default link_groups_path
  end

  def destroy
    if @link_group.destroy
      @link_group.link_group.destroy
      flash[:notice] = @link_group.name + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @link_group.name
    end
    
    redirect_back_or_default link_groups_path
  end

  private
  
  def get_link_group
    @link_group = LinkGroup.find(params[:id])
  end
  
end
