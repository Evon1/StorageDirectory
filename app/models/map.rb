class Map < ActiveRecord::Base
  
  belongs_to :listing
  acts_as_mappable :auto_geocode => { :field => :full_address, :error_message => 'Could not geocode address' }
  
  validates_presence_of :address, :city, :state, :zip
  validates_numericality_of :zip
  validates_length_of :state, :is => 2
  validates_length_of :zip, :within => 4..5
  
  attr_reader :full_address
  
  # Instance Methods
  
  def full_address
    "#{address}, #{city}, #{state}"
  end
  
  def city_state_zip
    "#{city}, #{state} #{prep_zip(zip)}"
  end
  
  def prep_zip(zip)
    zip.to_s.size < 5 ? "0#{zip}" : zip
  end
  
end
