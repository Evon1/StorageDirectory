class AddEnabledColumnToPageBlock < ActiveRecord::Migration
  def self.up
    add_column :page_blocks, :enabled, :boolean
  end

  def self.down
    remove_column :page_blocks, :enabled
  end
end
