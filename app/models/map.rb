class Map < ActiveRecord::Base
  
  belongs_to :listing
  
  # Instance Methods
  
  def city_state_zip
    "#{city}, #{state} #{zip}"
  end
  
end
