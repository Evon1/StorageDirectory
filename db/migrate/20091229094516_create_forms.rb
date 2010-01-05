class CreateForms < ActiveRecord::Migration
  def self.up
    create_table :forms do |t|
      t.string :name
      t.text :description
      t.string :controller
      t.string :action
      t.string :method
      t.text :fields
      t.boolean :enabled

      t.timestamps
    end
  end

  def self.down
    drop_table :forms
  end
end
