class AddPositionColumnToField < ActiveRecord::Migration
  def self.up
    add_column :fields, :position, :integer, :default => 0
  end

  def self.down
    remove_column :fields, :position
  end
end
