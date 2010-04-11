module SiteSettingsHelper
  
  def setting_field_options(setting)
    if new_setting?(setting)
      { :class => 'hintable', :title => 'Create a new setting' }
    else # existing setting
      { :value => setting[1] }
    end
  end
  
  def new_setting?(setting)
    setting[0] == :field
  end
  
end
