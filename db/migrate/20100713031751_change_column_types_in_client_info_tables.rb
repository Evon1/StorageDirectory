class ChangeColumnTypesInClientInfoTables < ActiveRecord::Migration
  def self.up
    change_column :mailing_addresses, :phone, :string
    change_column :billing_infos, :phone, :string
    change_column :billing_infos, :card_number, :string
  end

  def self.down
  end
end
