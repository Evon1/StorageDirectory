class TypeChangeInMap < ActiveRecord::Migration
  def self.up
    change_column :maps, :lat, :numeric
    change_column :maps, :lng, :numeric
  end

  def self.down
  end
end
