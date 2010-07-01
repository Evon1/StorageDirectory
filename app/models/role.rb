class Role < ActiveRecord::Base
  
  has_many :users
  has_many :permissions, :dependent => :destroy
  
  named_scope :non_admin_roles, :conditions => 'title != "Admin"'
  
  access_shared_methods
  
  def select_list_options
    self.map { |r| "#{r.id}-#{r.title}"}
  end
  
end
