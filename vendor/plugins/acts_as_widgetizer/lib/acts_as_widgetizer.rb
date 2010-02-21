module Widgetizer
  def self.included(base)
    base.extend(ClassMethods)
  end
 
  class Config
    attr_reader :model
    attr_reader :model_id
 
    def initialize(model_id)
      @model_id = model_id
      @model = model_id.to_s.camelize.constantize
    end
 
    def model_name
      @model_id.to_s
    end
  end
 
  module ClassMethods
	  def widgetizer(model_id = nil)
      # converts Foo::BarController to 'bar' and FooBarsController to 'foo_bar' and AddressController to 'address'
      model_id = self.to_s.split('::').last.sub(/Controller$/, '').pluralize.singularize.underscore unless model_id
 
      @acts_as_exportable_config = Widgetizer::Config.new(model_id)
      include Widgetizer::InstanceMethods
    end
 
    # Make the @acts_as_exportable_config class variable easily accessable from the instance methods.
    def acts_as_exportable_config
      @acts_as_exportable_config || self.superclass.instance_variable_get('@acts_as_exportable_config')
    end
    
    @@dir_regex = /\.{1,2}$/
    
    # scan widget directory return widget objects
    def all(options = {})
      widgets = []
      
      Dir.new(widgetizer_config[:widget_path_full]).entries.each do |dir|
        next if dir =~ @@dir_regex
        
        Dir.new(widgetizer_config[:widget_path_full] + '/' + dir).entries.each do |file|
          next if file =~ @@dir_regex
          
          widgets << { :name => parse_name(file), :view => get_view_html(dir, file) }
        end
      end
      
      raise widgets.pretty_inspect
    end
    
    def find(name)
      all.detect { :name == name }
    end
    
    def widgetizer_config(options = {})
      options[:widget_path] ||= 'widgets/widgets'
      {
        :widget_path => options[:widget_path],
        :widget_path_full => RAILS_ROOT + '/app/views/' + options[:widget_path]
      }
    end
    
    def parse_name(str)
      str.sub('_', '').sub('.html.erb', '')
    end
    
    def get_view_html(dir, file)
      render_to_string :partial => "#{widgetizer_config[:widget_path]}/#{dir}/#{file}"
    end
    
  end
 
	module InstanceMethods
    
    def method
      
    end
    
	  # Empty conditions. You can override this in your controller
    def	conditions_for_collection
    end
  end
  
end