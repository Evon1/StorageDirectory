class BlocksModel < ActiveRecord::Base
  
  belongs_to :block
  belongs_to :model, :polymorphic => true
  
  access_shared_methods
  
end
