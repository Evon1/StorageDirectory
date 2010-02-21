# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#   
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Major.create(:name => 'Daley', :city => cities.first)

Page.create([
  { :title => 'Home', :url => '/' }, 
  { :title => 'Pages', :url => '/pages' }, 
  { :title => 'Blocks', :url => '/blocks' },
  { :title => 'Links', :url => '/links' }, 
  { :title => 'Layouts', :url => '/layouts' }
])

Block.create([
  { :title => 'Navigation', :description => '' }, 
  { :title => 'LeftBlock1', :description => '' }, 
  { :title => 'RightBlock1', :description => '' },
  { :title => 'FooterBlock1', :url => '' }, 
  { :title => 'FooterBlock2', :url => '' }
])