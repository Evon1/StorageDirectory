class Size < ActiveRecord::Base
  
  belongs_to :listing
  
  attr_accessor :special
  
  def display_price
    "$#{self.price.to_f}"
  end
  
  def display_dimensions
    "#{x} x #{y}"
  end
  
end
