class AddGroupIdColumnToLink < ActiveRecord::Migration
  def self.up
    add_column :links, :link_group_id, :integer
  end

  def self.down
    remove_column :links, :link_group_id
  end
end
