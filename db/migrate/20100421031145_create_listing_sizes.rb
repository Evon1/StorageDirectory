class CreateListingSizes < ActiveRecord::Migration
  def self.up
    create_table :listing_sizes do |t|
      t.integer :listing_id
      t.integer :size_id
      t.integer :position, :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :listing_sizes
  end
end
