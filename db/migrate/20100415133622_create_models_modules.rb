class CreateModelsModules < ActiveRecord::Migration
  def self.up
    create_table :models_modules do |t|
      t.string :name
      t.integer :model_id
      t.string :model_type

      t.timestamps
    end
  end

  def self.down
    drop_table :models_modules
  end
end
