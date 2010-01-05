class AddShowTitleColumnToBlocksModel < ActiveRecord::Migration
  def self.up
    add_column :blocks_models, :show_title, :boolean
  end

  def self.down
    remove_column :blocks_models, :show_title
  end
end
