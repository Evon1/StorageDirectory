class Rate < ActiveRecord::Base
  belongs_to :rater, :class_name => "User"
  belongs_to :rateable, :polymorphic => true  
  attr_accessible :rate, :dimension
  
  access_shared_methods
end
