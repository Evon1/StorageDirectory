class CreateBillingInfos < ActiveRecord::Migration
  def self.up
    create_table :billing_infos do |t|
      t.integer :client_id
      t.string :name
      t.string :address
      t.integer :phone
      t.string :card_type
      t.integer :card_num
      t.integer :card_expiration

      t.timestamps
    end
  end

  def self.down
    drop_table :billing_infos
  end
end
