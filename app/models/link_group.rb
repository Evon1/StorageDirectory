class LinkGroup < ActiveRecord::Base
  
  has_many :links, :finder_sql => 'link.group_name IS NOT NULL AND link_group.name = link.group_name'
  
  validates_presence_of :name
  validates_uniqueness_of :name
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    find :all, :select => 'name, description, id'
  end
  
end
