class SearchResults < ApplicationController
  
  @@block_title = 'Search Results'
  @@view_name   = 'Greyresults'
  @@model_name  = 'listing'
  @@view_type   = 'storage_listing'
  @@region      = 'column_5'
  
  def self.init(model, params = {})
    _check_setup model
    run_query params
  end
  
  def self.run_query(params)
    unless params[:q].blank?
      if is_address_query?(params[:q])
        @model_data = Listing.paginate(:all, 
                                       :per_page => 7,
                                       :page => params[:page],
                                       :origin => params[:q], 
                                       :within => (params[:within] || 50),
                                       :include => [:map, :specials, :sizes, :pictures])
        
        if params[:order].blank? || params[:order] == 'distance'
          @model_data.sort_by_distance_from params[:q]
        end
      else
        @model_data = []
      end
    else
      raise ApplicationController.geoloc.pretty_inspect
    end
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
  
  private
  
  def self.is_address_query?(query)
    # zip code
    return true if query.match /\d{5}/
    
    # has a state name or abbrev
    regex = States::NAMES.map { |s| "(#{s[0]})|\s#{s[1]}$" } * '|'
    query.match /#{regex}/i
  end
  
end