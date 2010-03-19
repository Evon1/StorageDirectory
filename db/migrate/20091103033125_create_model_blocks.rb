class CreateModelBlocks < ActiveRecord::Migration
  def self.up
    create_table :blocks_models do |t|
      t.references :model, :polymorphic => true
      t.references :block
      
      t.timestamps
    end
  end

  def self.down
    drop_table :blocks_models
  end
end
