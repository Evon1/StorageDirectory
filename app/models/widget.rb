class Widget < ActiveRecord::Base
  
  has_many :block_widgets
  has_many :blocks, :through => :block_widgets
  
  has_one :widget_gallery, :dependent => :destroy
  has_one :gallery, :through => :widget_gallery
  accepts_nested_attributes_for :widget_gallery, :allow_destroy => true
  
  validates_presence_of :title
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    #find(:all, :select => 'title, content, id')
  end
  
end
