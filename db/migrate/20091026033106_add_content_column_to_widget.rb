class AddContentColumnToWidget < ActiveRecord::Migration
  def self.up
    add_column :widgets, :content, :text
  end

  def self.down
    remove_column :widgets, :content
  end
end
