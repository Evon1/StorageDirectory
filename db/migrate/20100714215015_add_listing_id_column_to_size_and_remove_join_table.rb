class AddListingIdColumnToSizeAndRemoveJoinTable < ActiveRecord::Migration
  def self.up
    add_column :sizes, :listing_id, :integer rescue nil
    
    ListingSize.find_each do |ls|
      s = Size.find(ls.size_id)
      ns = Size.create s.attributes.merge(:listing_id => ls.listing_id)
      puts "Create Size #{ns.id} with listing #{ls.listing_id}"
    end
    
    drop_table :listing_sizes
  end

  def self.down
    remove_column :sizes, :listing_id
  end
end
