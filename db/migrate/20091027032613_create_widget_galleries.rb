class CreateWidgetGalleries < ActiveRecord::Migration
  def self.up
    create_table :widget_galleries do |t|
      t.integer :widget_id
      t.integer :gallery_id

      t.timestamps
    end
  end

  def self.down
    drop_table :widget_galleries
  end
end
