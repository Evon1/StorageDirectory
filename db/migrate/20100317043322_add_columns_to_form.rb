class AddColumnsToForm < ActiveRecord::Migration
  def self.up
    add_column :forms, :send_email, :boolean
    add_column :forms, :recipient, :string
    add_column :forms, :use_reverse_captcha, :boolean
  end

  def self.down
    remove_column :forms, :use_reverse_captcha
    remove_column :forms, :recipient
    remove_column :forms, :send_email
  end
end
