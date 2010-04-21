class ModelsModule < ActiveRecord::Base
  
  belongs_to :model, :polymorphic => true
  access_shared_methods
  
  validates_presence_of :name
  
end
