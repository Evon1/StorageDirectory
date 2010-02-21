class AddPositionColumnToBlocksModel < ActiveRecord::Migration
  def self.up
    add_column :blocks_models, :position, :integer, :default => 0
  end

  def self.down
    remove_column :blocks_models, :position
  end
end
