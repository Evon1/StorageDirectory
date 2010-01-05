class VirtualModel < ActiveRecord::Base
  
  virtualize
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all
  end
  
  # Instance Methods
  
  def name
    model_hash[:name]
  end
  
  def description
    model_hash[:description]
  end
  
  private
  
  def model_hash # => json string to hash object
    json_string_to_hash(self.model)
  end

  def schema_hash # => json string to hash object
    json_string_to_hash(self.schema)
  end

  def self.json_string_to_hash(string)
    eval(string.gsub(/\\/, '').gsub(':', ' => ')).symbolize_keys unless string.nil?
  end
  
end
