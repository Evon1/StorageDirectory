class CreateHelptexts < ActiveRecord::Migration
  def self.up
    create_table :helptexts do |t|
      t.string :model
      t.text :text
      t.text :examples
      t.boolean :show

      t.timestamps
    end
  end

  def self.down
    drop_table :helptexts
  end
end
