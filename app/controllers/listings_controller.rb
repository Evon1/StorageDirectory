class ListingsController < ApplicationController

  before_filter :get_models_paginated, :only => :index
  before_filter :get_model, :only => [:show, :edit, :update]
  before_filter :get_client, :only => [:edit]
  before_filter :get_map, :only => [:show, :edit]
  
  def index
  end

  def show
    redirect_to facility_path(@listing.title.parameterize, @listing.id) if params[:title] == 'show'
  end

  def new
  end

  def edit
  end
  
  def update
  end
  
  private
  
  def get_client
    @client = @listing.client
  end
  
  def get_map
    @map = @listing.map
    @Gmap = GoogleMap::Map.new
		@Gmap.center = GoogleMap::Point.new(@map.lat, @map.lng)
		@Gmap.zoom = 16 # 2 miles
		@Gmap.markers << GoogleMap::Marker.new(:map => @Gmap, 
                                           :lat => @map.lat, 
                                           :lng => @map.lng,
                                           :html => "<strong>#{@listing.title}</strong><p>#{@listing.description}</p>",
                                           :marker_hover_text => @listing.title,
                                           :marker_icon_path => '/images/ui/map_marker.png')
  end
  
end
