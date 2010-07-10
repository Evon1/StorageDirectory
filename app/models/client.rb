class Client < User
  
  has_many :listings, :foreign_key => 'user_id'
  accepts_nested_attributes_for :listings
  
  attr_accessor :first_name, :last_name

end