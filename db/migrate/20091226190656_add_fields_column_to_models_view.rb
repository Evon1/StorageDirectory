class AddFieldsColumnToModelsView < ActiveRecord::Migration
  def self.up
    add_column :models_views, :fields, :text
  end

  def self.down
    remove_column :models_views, :fields
  end
end
