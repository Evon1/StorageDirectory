class Listing < ActiveRecord::Base
  
  belongs_to :user
  
  has_one  :map
  acts_as_mappable :through => :map
  
  has_many :specials
  has_many :pictures
  has_many :listing_sizes
  has_many :sizes, :through => :listing_sizes
  
  validates_presence_of :title
  
  access_shared_methods
  
  # Class Methods
  
  def self.import_from_csv(records)
    count = 0; errors = ''; result = { :success => false, :message => '' }
    
    records.each_with_index do |row, i|
      next if i == 0 # skip header row
      
      unless Listing.exists?(:title => row[1].titleize)  || Map.exists?(:address => row[2], :city => row[3].titleize)
        # the following comments reflect the first csv file received from Tony Prada, labeled "Nationwide list 3/25/10"
        listing = new :title   => row[1].titleize, # COMPANY_NAME
                      :enabled => true
        
        listing.build_map :address => row[2].titleize,      # PRIMARY_ADDRESS
                          :city    => row[3].titleize,      # PRIMARY_CITY
                          :state   => row[4],               # PRIMARY_STATE
                          :zip     => row[7].split('-')[0], # PRIMARY_ZIP10
                          :phone   => row[16]               # PRIMARY_PHONE
                          
        listing.save ? count += 1 : errors << "<div>Record ##{i} failed to import. Error: #{listing.render_errors}</div>"
      end
    end
    
    result[:success] = (count > 0)
    result[:message] = (count > 0 ? count : errors)
    result # return value
  end
  
  # Instance Methods
  
  def get_partial_link(name)
    "ajax/get_partial?model=Listing&id=#{id}&partial=views/partials/greyresults/#{name.to_s}"
  end
  
  def lat() map.lat end
  def lng() map.lng end
  
end
