class BlockForm < ActiveRecord::Base
  
  belongs_to :block
  belongs_to :form
  
  access_shared_methods
  
end
