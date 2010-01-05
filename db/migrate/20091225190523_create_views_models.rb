class CreateViewsModels < ActiveRecord::Migration
  def self.up
    create_table :views_models do |t|
      t.integer :view_id
      t.integer :model_id
      t.string :model_type
      t.string :order
      t.integer :position
      t.integer :limit

      t.timestamps
    end
  end

  def self.down
    drop_table :views_models
  end
end
