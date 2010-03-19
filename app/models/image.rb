class Image < ActiveRecord::Base
  
  belongs_to :user
  has_many :gallery_images, :dependent => :destroy
  has_many :galleries, :through => :gallery_images
  
  has_attached_file :image, 
    :styles => { :medium => '700x400>', :thumb => '150x150#' },
    :url => "/:class/gallery/:id/:style_:basename.:extension",
    :path => ":rails_root/public/:class/gallery/:id/:style_:basename.:extension"
  
  validates_presence_of :title
  validates_attachment_presence :image
  validates_attachment_content_type :image, :content_type => ['image/png', 'image/jpg', 'image/jpeg',  'image/gif']
  
  acts_as_commentable
  acts_as_taggable_on :tags, :locations
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    find(:all, :select => 'title, image_file_name, id')
  end
  
end
