class Size < ActiveRecord::Base
  
  belongs_to :listing
  
  attr_accessor :special
  
  def display_dimensions
    "#{x} x #{y}"
  end
  
end
