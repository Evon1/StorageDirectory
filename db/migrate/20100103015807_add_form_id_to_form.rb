class AddFormIdToForm < ActiveRecord::Migration
  def self.up
    add_column :fields, :form_id, :integer
  end

  def self.down
    remove_column :fields, :form_id
  end
end
