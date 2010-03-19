class Layout
  
  attr_reader :id, :path, :full_path, :type
  
  def self.all
    file_path = "#{RAILS_ROOT}/public/stylesheets/layout"
    fixed = Dir.new("#{file_path}/fixed").map { |f| new :id => f, :path => "layout/fixed/", :type => 'fixed' }
    fluid = Dir.new("#{file_path}/fluid").map { |f| new :id => f, :path => 'layout/fluid/', :type => 'fluid' }
    [fixed, fluid].flatten.reject { |f| f.id =~ /\.+$/ } # get rid of . and ..
  end
  
  def initialize(attributes)
    @id = attributes[:id]
    @path = attributes[:path]
    @full_path = @path + @id
    @type = attributes[:type]
  end
  
end