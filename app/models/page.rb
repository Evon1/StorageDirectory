class Page < ActiveRecord::Base
  
  #acts_as_nested_set
  has_many :blocks_model, :as => :model, :dependent => :destroy
  accepts_nested_attributes_for :blocks_model
  
  has_many :views, :as => :model
  accepts_nested_attributes_for :views
  
  validates_uniqueness_of :title
  validates_presence_of :title
  
  acts_as_commentable
  acts_as_taggable_on :categories
  access_shared_methods
  
  # Class Methods
  
  def self.all_for_index_view
    all :select => 'title, description, content, id, parent_id'
  end
  
  def self.nav_pages
    all :conditions => 'show_in_nav IS TRUE', :order => 'position, id'
  end
  
  def self.page_positions
    positions = []
    0.upto(self.nav_pages.size) { |i| positions << i }
    positions
  end
  
  # Instance Methods
  
  def before_save
    
  end
  
end