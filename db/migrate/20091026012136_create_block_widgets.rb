class CreateBlockWidgets < ActiveRecord::Migration
  def self.up
    create_table :block_widgets do |t|
      t.integer :block_id
      t.integer :widget_id

      t.timestamps
    end
  end

  def self.down
    drop_table :block_widgets
  end
end
