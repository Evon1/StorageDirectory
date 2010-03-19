class GalleryImage < ActiveRecord::Base
  
  belongs_to :gallery
  belongs_to :image
  accepts_nested_attributes_for :image
  
  access_shared_methods
  
end
