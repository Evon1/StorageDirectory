class View < ActiveRecord::Base
  
  has_many_polymorphs :models, :from => [:pages, :posts, :blocks]
  
  validates_uniqueness_of :name
  validates_presence_of :name, :description
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all :select => 'id, name, description'
  end
  
  # Instance Methods
  def model # => turn the views model_name string into the class it represents
    self.model_name.camelcase.constantize
  end
  
  def fields
    self.model.column_names if self.model.respond_to?('column_names')
  end
  
  def models_view(view_owner)
    self.models_views.find_by_model_id(view_owner)
  end
  
  def enabled_in?(model)
    models_view = self.models_views.find(:first, :conditions => ['model_type = ? AND model_id = ?', model.class.name, model.id])
    models_view ? true : false
  end
  
  # validate a views configuration by making sure that the models of class [model_name] are associated to models class [scope]
  def validate
    return true if scope.blank?
    assoc, model_class, scoper_class = model_name.pluralize, model_name.to_class, scope.to_class
    error_message = "Couldn't find a valid relation from #{scope.pluralize} to #{assoc}. Tried: #{scope}.#{assoc}" 
    
    has_assoc = scoper_class.new.respond_to? assoc
    
    if scope == 'block'
      errors.add_to_base "#{error_message} and #{scope}.models." unless scoper_class.new.respond_to?('models') || has_assoc
    else
      add_to_base error_message unless has_assoc
    end
  end
  
end
