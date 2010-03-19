class CreateSuggestions < ActiveRecord::Migration
  def self.up
    create_table :suggestions do |t|
      t.string :title
      t.text :description
      t.string :controller
      t.string :action

      t.timestamps
    end
  end

  def self.down
    drop_table :suggestions
  end
end
