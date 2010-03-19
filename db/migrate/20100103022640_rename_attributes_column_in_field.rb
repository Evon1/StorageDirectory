class RenameAttributesColumnInField < ActiveRecord::Migration
  def self.up
    rename_column :fields, :attributes, :field_attributes
  end

  def self.down
    rename_column :fields, :field_attributes, :attributes
  end
end
