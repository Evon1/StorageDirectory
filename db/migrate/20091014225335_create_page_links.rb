class CreatePageLinks < ActiveRecord::Migration
  def self.up
    create_table :page_links do |t|
      t.integer :page_id
      t.integer :link_id
      t.string :yield_in
      t.integer :order

      t.timestamps
    end
  end

  def self.down
    drop_table :page_links
  end
end
