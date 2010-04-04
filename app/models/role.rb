class Role < ActiveRecord::Base
  
  has_many :users
  has_many :permissions
  
  access_shared_methods
  
  def select_list_options
    self.map { |r| "#{r.id}-#{r.title}"}
  end
  
end
