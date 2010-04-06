class RenameLinkGroups < ActiveRecord::Migration
  def self.up
    rename_table :link_groups, :groups
  end

  def self.down
    rename_table :groups, :link_groups
  end
end
