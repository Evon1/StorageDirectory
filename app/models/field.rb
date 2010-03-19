class Field < ActiveRecord::Base
  
  access_shared_methods
  
  belongs_to :form
  
  validates_presence_of :field_type, :field_attributes
  
  def name
    _get_attribute_from_hash(:name)
  end
  
  def field_title
    _get_attribute_from_hash(:title)
  end
  
  def field_classes
    _get_attribute_from_hash(:class)
  end
  
  def validates?(validation)
    _attribute_in_hash?(validation)
  end
  
  def has_plugin?(plugin)
    _attribute_in_hash?(plugin)
  end
    
  def field_attributes_hash
    json_string_to_hash(self.field_attributes).symbolize_keys unless self.field_attributes.blank?
  end
  
  def field_attributes_hash_for_form_helper
    hash = self.field_attributes_hash
    hash.delete(:name)
    hash
  end
  
  private
  
  def _attribute_in_hash?(attribute)
    (_get_attribute_from_hash(:class)[attribute.to_s] ? true : false)
  rescue
    false
  end
  
  def _get_attribute_from_hash(attribute)
    field_attributes_hash.blank? ? [] : field_attributes_hash[attribute]
  end
  
end
