class TypeChangeInMap < ActiveRecord::Migration
  def self.up
    #change_column :maps, :lat, :numeric
    #change_column :maps, :lng, :numeric
    # couldn't type cast
    
    add_column :maps, :nlat, :numeric
    add_column :maps, :nlng, :numeric
    
    Map.find_each do |m|
      m.update_attributes :nlat => m.lat, :nlng => m.lng
      puts "updated map #{m.id}: #{m.zip}"
    end
    
    remove_column :maps, :lat
    remove_column :maps, :lng
    
    rename_column :maps, :nlat, :lat
    rename_column :maps, :nlng, :lng
  end

  def self.down
    #add_column :maps, :lat, :integer
    #add_column :maps, :lng, :integer
    remove_column :maps, :nlat
    remove_column :maps, :nlng
  end
end
