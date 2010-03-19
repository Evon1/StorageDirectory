class User < ActiveRecord::Base
  
  acts_as_authentic
  
  belongs_to :role
  has_many :permissions, :finder_sql => 'SELECT * FROM permissions p, users u ' +
                                        'WHERE u.id = #{id} AND p.role_id = u.role_id ' +
                                        'ORDER BY p.resource'
  
  has_many :posts
  has_many :images
  has_one :profile_image, :class_name => 'Image', :order => 'id ASC'
  accepts_nested_attributes_for :profile_image
  
  validates_presence_of :name, :email
  
  acts_as_commentable
  acts_as_tagger
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    find(:all, :select => 'name, email, last_login_at, id')
  end
  
end
