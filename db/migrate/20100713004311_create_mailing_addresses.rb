class CreateMailingAddresses < ActiveRecord::Migration
  def self.up
    create_table :mailing_addresses do |t|
      t.integer :client_id
      t.string :name
      t.string :company
      t.string :address
      t.integer :phone
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :mailing_addresses
  end
end
