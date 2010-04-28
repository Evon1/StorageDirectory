class TypeChangeInMap < ActiveRecord::Migration
  def self.up
    change_column :maps, :lat, :float
    change_column :maps, :lng, :float
  end

  def self.down
  end
end
