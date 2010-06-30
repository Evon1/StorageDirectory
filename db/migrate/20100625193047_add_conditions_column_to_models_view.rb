class AddConditionsColumnToModelsView < ActiveRecord::Migration
  def self.up
    add_column :models_views, :conditions, :string
  end

  def self.down
    remove_column :models_views, :conditions
  end
end
