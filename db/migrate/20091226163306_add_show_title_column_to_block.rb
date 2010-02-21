class AddShowTitleColumnToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :show_title, :boolean
  end

  def self.down
    remove_column :blocks, :show_title
  end
end
