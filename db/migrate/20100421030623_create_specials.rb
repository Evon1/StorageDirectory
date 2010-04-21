class CreateSpecials < ActiveRecord::Migration
  def self.up
    create_table :specials do |t|
      t.integer :listing_id
      t.string :title
      t.string :description
      t.string :content
      t.string :code
      t.boolean :enabled
      t.integer :position, :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :specials
  end
end
