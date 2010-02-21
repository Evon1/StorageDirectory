class WidgetGallery < ActiveRecord::Base
  
  belongs_to :widget
  belongs_to :gallery
  
  access_shared_methods
  
end
