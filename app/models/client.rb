class Client < User
  
  has_many :listings
  accepts_nested_attributes_for :listings
  
  attr_accessor :first_name, :last_name

end