class BillingInfo < ActiveRecord::Base
  
  belongs_to :client
  access_shared_methods
  
end
