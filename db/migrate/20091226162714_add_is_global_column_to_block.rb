class AddIsGlobalColumnToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :is_global, :boolean
  end

  def self.down
    remove_column :blocks, :is_global
  end
end
