class RemoveModelFieldsFromModelView < ActiveRecord::Migration
  def self.up
    remove_column :model_views, :model_id
    remove_column :model_views, :model_type
    rename_table :model_views, :views
  end

  def self.down
    rename_table :views, :model_views
    add_column :model_views, :model_id, :integer
    add_column :model_views, :model_type, :string
  end
end
