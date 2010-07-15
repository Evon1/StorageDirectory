class Reservation < ActiveRecord::Base
  
  belongs_to :client
  belongs_to :user
  has_one :comment
  accepts_nested_attributes_for :comment
  access_shared_methods
  
end
