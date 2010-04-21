class CreateMaps < ActiveRecord::Migration
  def self.up
    create_table :maps do |t|
      t.integer :listing_id
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :lat
      t.string :long

      t.timestamps
    end
  end

  def self.down
    drop_table :maps
  end
end
