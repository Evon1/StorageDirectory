class AddColumnsToSizes < ActiveRecord::Migration
  def self.up
    add_column :sizes, :unit_type, :string
    add_column :sizes, :price, :integer
  end

  def self.down
    remove_column :sizes, :unit_type
    remove_column :sizes, :price
  end
end
