class CreateGalleryImages < ActiveRecord::Migration
  def self.up
    create_table :gallery_images do |t|
      t.integer :gallery_id
      t.integer :image_id
      t.integer :order

      t.timestamps
    end
  end

  def self.down
    drop_table :gallery_images
  end
end
