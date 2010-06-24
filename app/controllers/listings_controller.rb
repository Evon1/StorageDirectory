class ListingsController < ApplicationController
  before_filter :get_models_paginated, :only => :index
  before_filter :get_model, :only => [:show, :edit]
  
  def index
  end

  def show
    @map = @listing.map
    @Gmap = GoogleMap::Map.new
		@Gmap.center = GoogleMap::Point.new @map.lat, @map.lng
		@Gmap.zoom = 16 # 2 miles
		@Gmap.markers << GoogleMap::Marker.new(:map => @Gmap, 
                                           :lat => @map.lat, 
                                           :lng => @map.lng,
                                           :html => "<strong>#{@listing.title}</strong><p>#{@listing.description}</p>",
                                           :marker_hover_text => @listing.title,
                                           :marker_icon_path => '/images/ui/map_marker.png')
  end

  def new
  end

  def edit
  end
  
end
