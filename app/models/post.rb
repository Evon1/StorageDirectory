class Post < ActiveRecord::Base
  
  belongs_to :user
  
  has_many :blocks_model, :as => :model, :dependent => :destroy
  accepts_nested_attributes_for :blocks_model
  
  validates_uniqueness_of :title
  validates_presence_of :title, :content
  
  acts_as_commentable
  acts_as_taggable_on :tags, :categories
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all :select => 'title, content, published, id, user_id, updated_at'
  end
  
  # Instance Methods
  def Xto_param
    #raise self.pretty_inspect
    #"#{id}-#{title.parameterize}"
  end
  
end
