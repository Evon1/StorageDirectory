class RemoveFieldsFromForm < ActiveRecord::Migration
  def self.up
    remove_column :forms, :fields
  end

  def self.down
    add_column :forms, :fields, :text
  end
end
