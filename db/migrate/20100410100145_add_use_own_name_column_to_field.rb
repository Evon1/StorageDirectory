class AddUseOwnNameColumnToField < ActiveRecord::Migration
  def self.up
    add_column :fields, :use_own_name, :boolean
  end

  def self.down
    remove_column :fields, :use_own_name
  end
end
