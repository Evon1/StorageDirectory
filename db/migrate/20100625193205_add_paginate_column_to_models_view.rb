class AddPaginateColumnToModelsView < ActiveRecord::Migration
  def self.up
    add_column :models_views, :paginate, :boolean
  end

  def self.down
    remove_column :models_views, :paginate
  end
end
