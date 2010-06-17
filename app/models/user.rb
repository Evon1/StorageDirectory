class User < ActiveRecord::Base
  
  acts_as_authentic
  ajaxful_rater
  
  belongs_to :role
  has_many :permissions, :finder_sql => 'SELECT * FROM permissions p, users u ' +
                                        'WHERE u.id = #{id} AND p.role_id = u.role_id ' +
                                        'ORDER BY p.resource'
  
  has_many :posts
  has_many :images
  has_one :profile_image, :class_name => 'Image', :order => 'id'
  
  # greyresults
  has_many :listings
  
  validates_presence_of :name, :email, :role_id
  
  acts_as_commentable
  acts_as_tagger
  access_shared_methods
  
  # Class Methods
  
  def self.all_for_index_view
    all :select => 'name, email, last_login_at, id'
  end
  
  # Instance Methods
  
  def update_attributes(params)
    self.images.build(params[:profile_image]) unless params[:profile_image].blank? || params[:profile_image][:image].blank?
    super(params[:user])
  end
  
  def has_role?(*roles)
    roles.include? self.role.title
  end
  
  # only allow a user to view and update their own profile
  # or perform allowed action on resources defined in their permissions
  def has_permission?(controller, action, params = {})
    return true if self.has_role?('Admin')
    
    if controller =~ /(users)|(images)/ && action !~ /new|create|destroy/
      if (controller == 'users' && params[:id].to_i == self.id) || (controller == 'images' && params[:user_id].to_i == self.id)
        return true
      end
    end
    
    self.permissions.each do |p|
      return true if p.allows?(action) && p.resource == controller
    end
    
    false # default if no permission defined for controller and action
  end
  
end
