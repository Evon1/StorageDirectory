class CreateModelViews < ActiveRecord::Migration
  def self.up
    create_table :model_views do |t|
      t.string :view_type
      t.string :model
      t.string :order
      t.integer :limit
      t.string :model_type
      t.integer :model_id
      t.string :name
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :model_views
  end
end
