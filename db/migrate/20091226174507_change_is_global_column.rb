class ChangeIsGlobalColumn < ActiveRecord::Migration
  def self.up
    remove_column :blocks, :is_global
    add_column :blocks, :show_in_all, :string
  end

  def self.down
    add_column :blocks, :is_global, :string
    remove_column :blocks, :show_in_all
  end
end
