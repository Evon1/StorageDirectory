class ListingSize < ActiveRecord::Base
  
  belongs_to :listing
  belongs_to :size
  
end
