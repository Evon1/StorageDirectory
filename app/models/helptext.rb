class Helptext < ActiveRecord::Base
  
  validates_uniqueness_of :model
  validates_presence_of :model, :text
  
  access_shared_methods
  
  # Instance Methods
  def title
    self.model.titleize + ' Helptext' unless self.new_record?
  end
  
end
