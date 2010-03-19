class AddScopeColumnsToForm < ActiveRecord::Migration
  def self.up
    add_column :forms, :scope, :string
    add_column :forms, :target_id, :integer
  end

  def self.down
    remove_column :forms, :target_id
    remove_column :forms, :scope
  end
end
