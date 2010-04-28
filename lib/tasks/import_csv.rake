namespace :import do
  
  desc "Import Listings from a CSV file."
  task :listings => :environment do
    require 'csv'
    count = 0; errors = ''; result = { :success => false, :message => '' }
  
    file = "#{RAILS_ROOT}/lib/tasks/#{ARGV[1]}"
    puts "Loading file: #{file}."
    
    read_file = File.read(file)
    puts "Parsing CSV format"
    
    records = CSV.parse read_file
    puts "Ready to import #{records.size} records."
  
    records.each_with_index do |row, i|
      next if i == 0 # skip header row
      
      unless Listing.exists?(:title => row[1].titleize)  || Map.exists?(:address => row[2], :city => row[3].titleize)
        # the following comments reflect the first csv file received from Tony Prada, labeled "Nationwide list 3/25/10"
        listing = Listing.new :title   => row[1].titleize, # COMPANY_NAME
                              :enabled => true

        listing.build_map :address => row[2].titleize,      # PRIMARY_ADDRESS
                          :city    => row[3].titleize,      # PRIMARY_CITY
                          :state   => row[4],               # PRIMARY_STATE
                          :zip     => row[7].split('-')[0], # PRIMARY_ZIP10
                          :phone   => row[16]               # PRIMARY_PHONE

        if listing.save
          count += 1
          puts "Created Listing (LAT: #{listing.map.lat}, LONG:#{listing.map.lng}): #{listing.title}\n"
        else
          puts "Record ##{i} failed to import. Error: #{listing.render_errors}\n"
        end
        
        if count % 50 == 0
          puts "Hit #{count} records, waiting for a sec..."
          sleep(1)
          puts "Ok Proceed"
        end
      end
    end

    puts 'Done.'
  end
end