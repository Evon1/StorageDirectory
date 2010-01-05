class CreateVirtualModels < ActiveRecord::Migration
  def self.up
    create_table :virtual_models do |t|
      t.text :model
      t.text :schema

      t.timestamps
    end
  end

  def self.down
    drop_table :virtual_models
  end
end
