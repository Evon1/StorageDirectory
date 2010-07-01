class MigrateUserTypesAndCreateClients < ActiveRecord::Migration
  def self.up
    puts "migrating existing user types"
    User.find_each { |u| u.update_attribute :type, 'User' }
    puts "done... \n caching advertiser role..."
    
    ad_role = Role.find_by_title 'advertiser'
    i = 1
    
    puts "Creating clients based on listings"
    Listing.find_each do |listing|
      client = Client.new :name => "Client-#{i}"
      client.listings << listing
      client.role = ad_role
      
      unless Client.exists? :name => client.name
        client.save false
        print "\rcreated #{client.name}."
      else
        puts "skipped."
      end
      
      $stdout.flush
      i += 1
    end
  end

  def self.down
    Client.delete_all
  end
end
