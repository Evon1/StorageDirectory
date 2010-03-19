class DropPageBlocksTable < ActiveRecord::Migration
  def self.up
    drop_table :page_blocks
  end

  def self.down
  end
end
