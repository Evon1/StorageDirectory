class SearchResults < ApplicationController
  
  @@block_title = 'Search Results' # title of the block that contains the view
  @@view_name   = 'Greyresults' # title of the view in the db
  @@model_name  = 'listing' 
  @@view_type   = 'greylisting' # name of the partial in app/views/views/partials
  @@region      = 'column_5' # where to put the block on the page enabled with this module
  
  def self.init(model, params = {}, session = {})
    _check_setup model
    run_query params, session
  end
  
  def self.run_query(params, session)
    q = params[:q]
    options = {
      :page     => params[:page], 
      :per_page => (params[:per_page] || 5),
      :include  => [:map, :specials, :sizes, :pictures],
      :within   => (params[:within]   || 5)
    }
    
    unless q.blank?
      if is_address_query?(q)
        @location = Geokit::Geocoders::MultiGeocoder.geocode(q)
        options.merge! :origin => @location
      else # query by name?
        conditions = { :conditions => ['title LIKE ?', "%#{q}%"] }
        options.merge! conditions
        
        unless session[:geo_location].blank?
          options.merge! :origin => [session[:geo_location][:lat], session[:geo_location][:lng]]
        else
          guessed = Listing.first(conditions).map.full_address rescue nil
          @location = Geokit::Geocoders::MultiGeocoder.geocode(guessed)
          options.merge! :origin => @location
        end
      end
    else
      @location = session[:geo_location] || Geokit::Geocoders::MultiGeocoder.geocode('99.157.198.126')
      options.merge! :origin => @location
    end
    
    @model_data = Listing.paginate(:all, options)
    @model_data.sort_by_distance_from @location if !params[:order] || params[:order] == 'distance'
    { :data => @model_data, :location => @location }
  end
  
  private
  
  def self._check_setup(model)
    _setup_block_for model unless _has_enabled_block(model)
  end
  
  def self._setup_block_for(model)
    search_block = Block.find_by_title(@@block_title) || _create_block
    bm = model.blocks_model.find_by_block_id(search_block.id)
    
    unless bm.nil?
      bm.update_attribute :enabled, true
    else
      _setup_view_for search_block unless search_block.views.map(&:name).include? @@view_name

      model.blocks_model.build :block_id => search_block.id, :place => @@region, :enabled => true
      model.save
    end
  end
  
  def self._setup_view_for(block)
    search_view = View.find_by_name(@@view_name) || _create_view
    block.models_views.build :view_id => search_view.id, :view_type => @@view_type, :enabled => true
    block.save
  end
  
  def self._create_block
    Block.create :title => @@block_title, :description => 'Contains the search results view.'
  end
  
  def self._create_view
    View.create :model_name => @@model_name, :name => @@view_name, :description => 'The special search results view.'
  end
  
  def self._has_enabled_block(model)
    return false unless model.blocks.map(&:title).include? @@block_title

    block = model.blocks.find_by_title @@block_title
    model.blocks_model.find_by_block_id(block.id).enabled == true
  end
  
  def self.is_address_query?(query)
    # zip code
    return true if query.match /\d{5}/
    
    # has a state name or abbrev or city name
    sregex = States::NAMES.map { |s| "(#{s[0]})|\s#{s[1]}$" } * '|'
    us_cities = UsCity.all.map { |c| c.name }
    
    query.match(/#{sregex}/i) || us_cities.any? { |c| c =~ /#{query}/i }
  end
  
end