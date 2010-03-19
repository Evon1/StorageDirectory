class BlockWidget < ActiveRecord::Base
  
  belongs_to :block
  belongs_to :widget
  
  access_shared_methods
  
end