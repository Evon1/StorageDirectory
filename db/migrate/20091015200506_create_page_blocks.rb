class CreatePageBlocks < ActiveRecord::Migration
  def self.up
    create_table :page_blocks do |t|
      t.integer :order
      t.string :place

      t.timestamps
    end
  end

  def self.down
    drop_table :page_blocks
  end
end
