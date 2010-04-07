class RenameColumnInLink < ActiveRecord::Migration
  def self.up
    #rename_column :links, :link_group_id, :group_id
  end

  def self.down
    rename_column :links, :group_id, :link_group_id
  end
end
