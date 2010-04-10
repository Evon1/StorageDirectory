class AddShowTitleColumnInForm < ActiveRecord::Migration
  def self.up
    add_column :forms, :show_title, :boolean
  end

  def self.down
    remove_column :forms, :show_title
  end
end
