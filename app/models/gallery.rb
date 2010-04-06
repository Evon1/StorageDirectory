class Gallery < ActiveRecord::Base
  
  has_many :widget_galleries, :dependent => :destroy
  has_many :widgets, :through => :widget_galleries
  
  has_many :gallery_images, :dependent => :destroy
  has_many :images, :through => :gallery_images
  
  validates_uniqueness_of :title
  validates_presence_of :title
  
  acts_as_taggable_on :tags, :locations
  access_shared_methods
  
  # Class Methods
  
  def self.all_for_index_view
    find(:all, :select => 'title, description, id')
  end
  
  # Instance Methods
  
  def to_param
    "#{id}-#{title.parameterize}"
  end
  
end