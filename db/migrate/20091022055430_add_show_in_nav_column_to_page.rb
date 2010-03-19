class AddShowInNavColumnToPage < ActiveRecord::Migration
  def self.up
    add_column :pages, :show_in_nav, :boolean
  end

  def self.down
    remove_column :pages, :show_in_nav
  end
end
