class Link < ActiveRecord::Base
  
  has_one :group, :as => :node, :conditions => 'group_id IS NOT NULL'
  has_many :blocks_model, :as => :model
  
  validates_uniqueness_of :title
  validates_presence_of :title, :path, :relative
  #validates_format_of :path, :with => ''
  validates_numericality_of :relative, :only_integer => true
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    find(:all, :select => 'title, path, relative, link_group_id, id')
  end
  
  # Instance Methods
  
  # used by shared model methods to build a select lists of all instances of a resource
  def scope
    self.resource
  end
  
end
