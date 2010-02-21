class RemoveMethodColumnFromForm < ActiveRecord::Migration
  def self.up
    remove_column :forms, :method
  end

  def self.down
    add_column :forms, :method, :string
  end
end
