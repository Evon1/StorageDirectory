class AddEnabledColumnInModelsView < ActiveRecord::Migration
  def self.up
    add_column :models_views, :enabled, :boolean
  end

  def self.down
    remove_column :models_views, :enabled
  end
end
