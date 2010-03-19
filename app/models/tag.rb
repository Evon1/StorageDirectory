class Tag < ActiveRecord::Base
  
  # Moved from the acts-as-taggable-on plugin directory in /vendor
  
  # added by DS
  access_shared_methods
  
  has_many :taggings, :dependent => :destroy
  
  validates_presence_of :name
  
  named_scope :named, lambda { |name| { :conditions => ["name = ?", name] } }
  named_scope :named_like, lambda { |name| { :conditions => ["name LIKE ?", "%#{name}%"] } }
  named_scope :named_like_any, lambda { |list| { :conditions => list.map { |tag| sanitize_sql(["name LIKE ?", tag.to_s]) }.join(" OR ") } }
  
  def initialize(attributes = {}, params = {}, user = nil)
    super attributes
    
  rescue
   super attributes
  end
  
  # LIKE is used for cross-database case-insensitivity
  def self.find_or_create_with_like_by_name(name)
    find(:first, :conditions => ["name LIKE ?", name]) || create(:name => name)
  end
  
  def ==(object)
    super || (object.is_a?(Tag) && name == object.name)
  end
  
  def to_s
    name
  end
  
  def count
    read_attribute(:count).to_i
  end
  
end
