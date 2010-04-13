module SiteSettingsHelper
  
  def render_site_setting_field(setting)
    field_name = "site_settings[#{setting[0]}]"
    
    case setting[0].to_sym
    when :theme
      select_tag field_name, option_tags(_themes(false), setting[1]), :class => 'required', :title => 'Select an available theme.'
    when :plugins, :widgets
      options_array = eval "_#{setting[0]}(false)" # _plugins, _widgets. defined in ApplicationController
      site_setting_check_boxes setting, field_name.sub(/]$/, '][]'), options_array
    else
      text_field_tag field_name, nil, setting_field_options(setting)
    end
  end
  
  def site_setting_check_boxes(setting, field_name, options_array)
    str = "<div class='uncollapse left #{setting[0]}_setting_field'>"
    options_array.each do |option|
      input_id = "#{field_name}#{option}".gsub /\W|_/, '_'
      
      str << '<div class="check_box_wrap left">'
        str << check_box_tag(field_name, option, has_setting?(setting[1], option), :id => input_id)
        str << label_tag(input_id, option)
      str << '</div>'
    end
    str << '</div>'
  end
  
  def site_settings_link(options = {})
    link_to 'Settings', '/site_settings/edit', options
  end
  
  def site_settings_link_for_menu(options = {})
    "&nbsp;|&nbsp;&nbsp;#{site_settings_link(options)}" if user_allowed? 'site_settings', 'edit'
  end
  
  def setting_field_options(setting)
    new_setting?(setting) ? { :class => 'hintable', :title => 'Create a new setting' } : { :value => setting[1] }
  end
  
  def has_setting?(setting, value)
    setting.split(/,\W?/).include? value
  end
  
  def new_setting?(setting)
    setting[0] == :field
  end
  
end
