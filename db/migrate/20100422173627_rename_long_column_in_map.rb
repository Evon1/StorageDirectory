class RenameLongColumnInMap < ActiveRecord::Migration
  def self.up
    rename_column :maps, :long, :lng
  end

  def self.down
    rename_column :maps, :lng, :long
  end
end
