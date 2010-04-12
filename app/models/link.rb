class Link < ActiveRecord::Base
  
  has_one :group, :as => :node, :conditions => 'group_id IS NOT NULL'
  has_many :blocks_model, :as => :model
  
  validates_uniqueness_of :title
  validates_presence_of :title
  validates_presence_of :relative, :if => Proc.new { |link| link.path.blank? }
  validates_presence_of :path, :if => Proc.new { |link| link.resource.blank? }
  #validates_format_of :path, :with => ''
  validates_numericality_of :relative, :only_integer => true
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all :select => 'title, path, relative, group_id, id, resource, target_id'
  end
  
  # Instance Methods
  
  # used by shared model methods to build a select lists of all instances of a resource
  def scope
    self.resource
  end
  
  # Instance Methods
  
  def scope # used by shared model methods to build a select lists of all instances of a resource
    self.resource
  end
  
end
