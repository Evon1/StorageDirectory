class Client < User
  
  has_many :listings
  accepts_nested_attributes_for :listings
  
end