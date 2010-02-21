class CreateBlockForms < ActiveRecord::Migration
  def self.up
    create_table :block_forms do |t|
      t.integer :block_id
      t.integer :form_id
      t.boolean :enabled
      t.integer :position

      t.timestamps
    end
  end

  def self.down
    drop_table :block_forms
  end
end
