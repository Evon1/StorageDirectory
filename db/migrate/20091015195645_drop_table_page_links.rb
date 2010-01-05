class DropTablePageLinks < ActiveRecord::Migration
  def self.up
    drop_table :page_links
  end

  def self.down
  end
end
