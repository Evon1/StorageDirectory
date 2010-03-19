class RenameModelColumnInModelView < ActiveRecord::Migration
  def self.up
    rename_column :model_views, :model, :model_name
  end

  def self.down
    rename_column :model_views, :model_name, :model
  end
end
