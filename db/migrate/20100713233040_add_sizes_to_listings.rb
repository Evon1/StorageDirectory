class AddSizesToListings < ActiveRecord::Migration
  def self.up
    puts 'caching listings and sizes...'
    
    listings = Listing.all[0..1000]
    # create sizes if not present
    [
      { :title => 'Small Square', :x => 5, :y => 5, :unit => 'ft' },
      { :title => 'Small Rect', :x => 5, :y => 10, :unit => 'ft' },
      { :title => 'Medium Square', :x => 10, :y => 10, :unit => 'ft' },
      { :title => 'Medium Rect', :x => 10, :y => 15, :unit => 'ft' },
      { :title => 'Large Square', :x => 15, :y => 15, :unit => 'ft' },
      { :title => 'Large Rect', :x => 15, :y => 20, :unit => 'ft' }
    ].map { |size| Size.create(size) unless Size.exists?(:title => size[:title]) }
    @sizes = Size.all[0..6]
        
    puts "done.\rcreating relations..."
    
    Listing.transaction do
      listings.each_with_index do |listing, i|
        listing.sizes << @sizes
        listing.save
    
        bar_length = 100
        listings_size = 1000
        scale = listings_size / 100
        remaining_percent = (listings_size - (i + 1) * scale) / scale
        done_percent = bar_length - remaining_percent
      
        print "\rAdded sizes to listing: #{listing.title}\r[#{('=' * done_percent) + (' ' * (remaining_percent >= 0 ? remaining_percent : 0))}] #{done_percent}% Done#{'.' * (i % 4)}"
        $stdout.flush
      end
    end
  end

  def self.down
    puts 'destroying all listings\' sizes...'
    Listing.all[0..1000].each { |l| l.sizes = []; l.save }
  end
end
