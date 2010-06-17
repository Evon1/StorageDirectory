class AddProcessErbColumnToPageAndBlock < ActiveRecord::Migration
  def self.up
    add_column :pages, :process_erb, :boolean
    add_column :blocks, :process_erb, :boolean
  end

  def self.down
    remove_column :pages, :process_erb
    remove_column :blocks, :process_erb
  end
end
