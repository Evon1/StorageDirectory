class AddContentColumnToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :content, :text
  end

  def self.down
    remove_column :blocks, :content
  end
end
