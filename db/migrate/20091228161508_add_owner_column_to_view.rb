class AddOwnerColumnToView < ActiveRecord::Migration
  def self.up
    add_column :views, :owner_id, :integer
  end

  def self.down
    remove_column :views, :owner_id
  end
end
