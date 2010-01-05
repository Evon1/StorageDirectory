class ChangeColumnsInView < ActiveRecord::Migration
  def self.up
    remove_column :views, :view_type
    remove_column :views, :order
    remove_column :views, :limit
    add_column :models_views, :view_type, :string
  end

  def self.down
    add_column :views, :view_type, :string
    add_column :views, :order, :string
    add_column :views, :limit, :integer
    remove_column :models_views, :view_type
  end
end
