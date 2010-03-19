class ModelsView < ActiveRecord::Base
  
  belongs_to :view
  belongs_to :model, :polymorphic => true
  
  validates_presence_of :view_type
  
  access_shared_methods
  
  def before_save
    self.fields = self.fields.blank? ? 'id' : 'id, ' + (self.fields * ', ') unless self.fields.is_a?(String)
  end
  
end
