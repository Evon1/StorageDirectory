class Form < ActiveRecord::Base
  
  has_many :block_forms, :dependent => :destroy
  has_many :blocks, :through => :block_forms
  has_many :fields
  
  validates_uniqueness_of :name
  validates_presence_of :name, :controller, :action
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all :select => 'name, description, id, enabled, controller, action'
  end
  
  # Instance Methods
  def enabled_in?(block)
    block_form = self.block_forms.find_by_block_id(block.id)
    block_form ? block_form.enabled : false
  end
  
  def form_properties
    @form_properties ||= ['required', 'email', 'hintable']
  end
  
  def fields_attributes=(params)
    params.each_with_index do |fields, i|
      _add_to_fields_classes(fields) if fields['required'] || fields['hintable']
      type = fields.delete('field_type').downcase
      
      unless fields[:id].blank?
        self.fields.find(fields.delete(:id)).update_attributes(:field_type => type, :field_attributes => fields.to_json)
      else
        self.fields.build(:field_type => type, :field_attributes => fields.to_json)
      end
    end
  end
  
  def has_field?(type, fields)
    self.fields.exists?(:field_type => type, :field_attributes => fields.to_json)
  end
  
  def fields_hash
    self.json_string_to_hash(self.fields)
  end
  
  def get_url_hash
    { :controller => self.controller, :action => self.action }
  end
  
  def has_field_type(attribute, zelf)
    raise [self, zelf].pretty_inspect
    raise params.pretty_inspect
  end
  
  def field_set_id
    "#{self.controller}_#{self.action}_#{self.id}"
  end
  
  def should_send_email?
    self.send_email && !self.recipient.blank?
  end
  
  private
  
  def _add_to_fields_classes(fields)
    %w( required email hintable ).each do |form_property|
      _append_to_string(form_property, fields) if fields.delete(form_property)
    end
  end
  
  def _append_to_string(str_class, fields)
    fields['class'] ||= []
    fields['class'] << ((fields['class'] && fields['class'].size > 0) ? " #{str_class}" : str_class) if fields['class'][str_class].blank?
  end
  
end
