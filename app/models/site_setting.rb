class SiteSetting
  
  def self.get_full_config
    raw_config  = File.read(config_file)
    YAML.load(raw_config)
  end
  
  def self.config_file
    "#{RAILS_ROOT}/config/app_config.yml"
  end
  
  def self.update(settings)
    # strip out default values
    settings.delete :field
    
    full_config = get_full_config
    
    # update only this environments settings
    full_config[RAILS_ENV] = settings
    
    File.open(config_file, 'w') do |file|
      file.puts full_config.to_yaml
    end
    
    true
  end
  
  def self.helptext
    Helptext.find_by_model self.name.underscore
  end
  
  def self.column_names
    get_full_config[RAILS_ENV].keys
  end
  
end