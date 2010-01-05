class RenameViewsModelTable < ActiveRecord::Migration
  def self.up
    rename_table :views_models, :models_views
  end

  def self.down
    rename_table :models_views, :views_models
  end
end
