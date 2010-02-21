class AddColumnsToPageBlock < ActiveRecord::Migration
  def self.up
    add_column :page_blocks, :page_id, :integer
    add_column :page_blocks, :block_id, :integer
  end

  def self.down
    remove_column :page_blocks, :block_id
    remove_column :page_blocks, :page_id
  end
end
