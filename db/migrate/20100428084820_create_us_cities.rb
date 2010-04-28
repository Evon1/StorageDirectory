class CreateUsCities < ActiveRecord::Migration
  def self.up
    create_table :us_cities do |t|
      t.string :state
      t.string :name

      t.timestamps
    end rescue nil
    
    add_index :us_cities, :name
    add_index :us_cities, :state
    
    require 'csv'
    path = "#{RAILS_ROOT}/lib/tasks/us_cities.csv"
    puts "Loading File #{path}..."
    
    file = File.read path
    puts "Parsing CSV format..."
    
    records = CSV.parse file
    puts "Ready to import #{records.size} records..."
    
    records.each do |row|
      city = UsCity.create(:state => row[0], :name => row[1]) unless UsCity.exists?(:state => row[0], :name => row[1])
      puts "Created #{city.name}, #{city.state}" unless city.nil?
    end
    
    puts "\nDone.\n"
  end

  def self.down
    drop_table :us_cities
  end
end
