class AddColumnsToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :title, :string
    add_column :blocks, :description, :text
  end

  def self.down
    remove_column :blocks, :description
    remove_column :blocks, :title
  end
end
