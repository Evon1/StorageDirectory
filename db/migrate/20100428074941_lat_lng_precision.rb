class LatLngPrecision < ActiveRecord::Migration
  def self.up
    remove_column :maps, :lat
    remove_column :maps, :lng
    
    add_column :maps, :lat, :float, :precision => 8
    add_column :maps, :lng, :float, :precision => 8
  end

  def self.down
  end
end
