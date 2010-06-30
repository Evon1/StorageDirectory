class AddResfulRegionColumnToBlock < ActiveRecord::Migration
  def self.up
    add_column :blocks, :restful_region, :string
  end

  def self.down
    remove_column :blocks, :restful_region
  end
end
