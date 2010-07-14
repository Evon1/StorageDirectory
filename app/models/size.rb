class Size < ActiveRecord::Base
  
  has_many :listing_sizes, :dependent => :destroy
  has_many :listings, :through => :listing_sizes
  
  def display_dimensions
    "#{x} x #{y}"
  end
  
end
