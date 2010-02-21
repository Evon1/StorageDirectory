class RenameNameColumnInLinks < ActiveRecord::Migration
  def self.up
    rename_column :links, :name, :title
  end

  def self.down
    rename_column :links, :title, :name
  end
end
