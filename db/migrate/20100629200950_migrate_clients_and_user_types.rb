class MigrateClientsAndUserTypes < ActiveRecord::Migration
  def self.up
    puts "migrating existing user types..."
    User.find_each do |u| u.update_attribute(:type, 'User')
      if u.type.blank?
        u.update_attribute :type, 'User'
        print "\rUpdated user #{u.name}"
      elsif /^(Client)/.match(u.name)
        unless u.type == 'Client'
          u.update_attribute(:type, 'Client') 
          print "\rUpdated user #{u.name}"
        end
      end
      
      $stdout.flush
    end
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
        print "\rClient #{client.name} already exists."
      end
      
      $stdout.flush
      i += 1
    end
  end

  def self.down
    Client.delete_all
  end
end
