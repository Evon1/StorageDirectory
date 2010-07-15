class SizesController < ApplicationController
  
  before_filter :get_models_paginated, :only => :index
  before_filter :get_listing, :only => :update
  
  def index
  end

  def show
  end

  def new
  end

  def edit
  end
  
  def update
    @size = @listing.sizes.find(params[:id])
    
      if @size.update_attributes(params[:size])
        render :json => { :success => true }
      else
        raise @size.errors.full_messages.pretty_inspect
      end
  end
  
  private
  
  # TODO: scope the listings by user => current_user.listings.find, must set up client accounts that have listings to test with
  def get_listing
    @listing = Listing.find(params[:listing_id])
  end

end
