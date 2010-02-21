class CreateFields < ActiveRecord::Migration
  def self.up
    create_table :fields do |t|
      t.string :field_type
      t.text :attributes

      t.timestamps
    end
  end

  def self.down
    drop_table :fields
  end
end
