class AddScopeColumnToView < ActiveRecord::Migration
  def self.up
    add_column :views, :scope, :string
  end

  def self.down
    remove_column :views, :scope
  end
end
