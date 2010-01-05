class BlocksController < ApplicationController
  before_filter :get_block, :except => [:index, :new, :create]
  before_filter :get_associations, :only => [:new, :edit]
  
  def index
    @blocks = Block.all_for_index_view
  end

  def show
  end

  def new
    @block = Block.new
  end

  def create
    @block = Block.new(params[:block])
    @block.update_assoc(:models_views, params[:models_views])
    @block.update_assoc(:block_forms, params[:block_forms])
    
    if @block.save
      flash[:notice] = @block.title + ' has been created.'
      redirect_back_or_default blocks_path
    else
      get_associations
      render :action => 'edit'
    end
  end

  def edit
  end

  def update
    @block.update_assoc(:models_views, params[:models_views])
    @block.update_assoc(:block_forms, params[:block_forms])
    
    if @block.update_attributes(params[:block])
      flash[:notice] = @block.title + ' has been updated.'
      redirect_back_or_default blocks_path
    else
      get_associations
      render :action => 'edit'
    end
  end

  def destroy
    if @block.destroy
      flash[:notice] = @block.title + ' DESTROYED!'
    else
      flash[:error] = 'Error destroying ' + @block.title
    end
    
    redirect_back_or_default blocks_path
  end
  
  private
  
  def get_block
    @block = Block.find(params[:id])
  end
  
  def get_associations
    @views       = View.all
    @forms = Form.all
    @widgets     = Widget.all
  end
  
end
