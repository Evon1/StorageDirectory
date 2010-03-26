class Permission < ActiveRecord::Base
  
  belongs_to :role
  
  access_shared_methods
  
  # Class Methods
  
  def self.create_or_update_many(params)
    results = { :permissions => [], :updated => 0, :created => 0 }
    
    params.each do |permission|
      if permission[:id].blank?
        results[:permissions] << create(permission)
        results[:created] += 1
      else
        results[:permissions] << find(permission.delete(:id)).update_attributes(permission)
        results[:updated] += 1
      end
    end
    
    results
  end
  
  # Instance Methods
  
  def title
    "#{self.role.title} #{self.action} #{self.resource}" unless self.new_record?
  end
  
end
