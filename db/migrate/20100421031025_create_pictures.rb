class CreatePictures < ActiveRecord::Migration
  def self.up
    create_table :pictures do |t|
      t.integer :listing_id
      t.string :title
      t.text :description
      t.integer :position, :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :pictures
  end
end
