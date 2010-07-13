class RenameCardNumColumnInBillingInfoToCardNumber < ActiveRecord::Migration
  def self.up
    rename_column :billing_infos, :card_num, :card_number
  end

  def self.down
    rename_column :billing_infos, :card_number, :card_num
  end
end
