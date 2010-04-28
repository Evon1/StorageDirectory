class ListingsController < ApplicationController
  before_filter :get_models_paginated, :only => :index
  before_filter :get_model, :only => [:show, :edit]
  
  def index
  end

  def show
    coords = get_coords(@listing)
    @map = GoogleMap::Map.new
		@map.center = GoogleMap::Point.new coords.lat, coords.lng
		@map.zoom = 15 #60km
		@map.markers << GoogleMap::Marker.new(:map => @map, 
                                          :lat => coords.lat, 
                                          :lng => coords.lng,
                                          :html => @listing.title,
                                          :marker_hover_text => @listing.description)
  end

  def new
  end

  def edit
  end
  
end
