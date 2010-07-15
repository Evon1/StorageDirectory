class AddListingsToClients < ActiveRecord::Migration
  def self.up
    puts 'caching clients...'
    clients = Client.all[1..200]
    puts "Done.\rcaching listings..."
    listings = Listing.all[1..200]
    puts "Done.\rAdding listings to Clients.\r"
    
    clients.each_with_index do |c, i|
      l = listings[i]
      c.listings << l
      c.save
      puts "Added listing #{l.title} to client #{c.name}"
    end
  end

  def self.down
    puts 'Remove listings from first 200 clients'
    Client.all[1..200].each { |c| c.listings = []; c.save }
  end
end
