class AddContentColumnToImage < ActiveRecord::Migration
  def self.up
    add_column :images, :description, :text
    add_column :images, :content, :text
  end

  def self.down
    remove_column :images, :content
    remove_column :images, :description
  end
end
