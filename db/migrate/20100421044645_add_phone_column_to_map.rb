class AddPhoneColumnToMap < ActiveRecord::Migration
  def self.up
    add_column :maps, :phone, :string
  end

  def self.down
    remove_column :maps, :phone
  end
end
