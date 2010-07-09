class Listing < ActiveRecord::Base
  
  belongs_to :user
  
  has_one  :map
  acts_as_mappable :through => :map
  
  has_many :specials
  has_many :pictures
  has_many :listing_sizes
  has_many :sizes, :through => :listing_sizes
  
  validates_presence_of :title
  
  access_shared_methods
  
  # Instance Methods
  
  def get_partial_link(name)
    "/ajax/get_partial?model=Listing&id=#{id}&partial=views/partials/greyresults/#{name.to_s}"
  end
  
  def city_and_state
    [self.map.city, self.map.state]
  end
  
  def lat() map.lat end
  def lng() map.lng end
  
end
