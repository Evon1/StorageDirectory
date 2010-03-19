class Role < ActiveRecord::Base
  
  has_many :users
  has_many :permissions
  
  access_shared_methods
  
end
