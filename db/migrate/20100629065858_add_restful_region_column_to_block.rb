class AddRestfulRegionColumnToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :restful, :boolean
    add_column :blocks, :controller, :string
    add_column :blocks, :action, :string
  end

  def self.down
    remove_column :blocks, :restful
    remove_column :blocks, :controller
    remove_column :blocks, :action
  end
end
