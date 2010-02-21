class AddPlaceColumnToBlocksModel < ActiveRecord::Migration
  def self.up
    add_column :blocks_models, :place, :string
    add_column :blocks_models, :enabled, :boolean
  end

  def self.down
    remove_column :blocks_models, :place
    remove_column :blocks_models, :enabled
  end
end
