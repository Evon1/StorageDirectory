class AddUsePlaceholdersColumnToPage < ActiveRecord::Migration
  def self.up
    add_column :pages, :use_placeholders, :boolean
    add_column :blocks, :use_placeholders, :boolean
  end

  def self.down
    remove_column :pages, :use_placeholders
    remove_column :blocks, :use_placeholders
  end
end
