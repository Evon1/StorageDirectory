class AddDistanceColumnToMap < ActiveRecord::Migration
  def self.up
    add_column :maps, :distance, :integer
  end

  def self.down
    remove_column :maps, :distance
  end
end
