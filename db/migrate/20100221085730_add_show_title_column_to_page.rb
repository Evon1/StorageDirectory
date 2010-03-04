class AddShowTitleColumnToPage < ActiveRecord::Migration
  def self.up
    add_column :pages, :show_title, :boolean
  end

  def self.down
    remove_column :pages, :show_title
  end
end
