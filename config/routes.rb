ActionController::Routing::Routes.draw do |map|
  # The priority is based upon order of creation: first created -> highest priority.

  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)
  map.login  '/login',  :controller => 'user_sessions', :action => 'new'
  map.signup '/signup', :controller => 'users',         :action => 'new'
  map.logout '/logout', :controller => 'user_sessions', :action => 'destroy'
  
  # clean seo friendly
  map.facility '/self-storage/:title/:id', :controller => 'listings', :action => :show
  map.quick_search '/self-storage/:q', :controller => 'pages', :action => 'show'
  
  # grey module
  map.locate '/locate/:state/:city/:address', :controller => 'pages', 
                                   :action => 'show',
                                   :title => 'storage-locator',
                                   :requirements => { :zip => /^\d{5}$/ }
  
  map.create_tip '/create_tip', :controller => 'posts', :action => 'create', :for => 'tip'
  
  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products
  map.resources :users
  map.resources :user_sessions
  map.resources :permissions
  map.resources :roles
  map.resources :pages
  map.resources :posts, :member => { :rate => :post }
  map.resources :blocks
  map.resources :comments
  map.resources :tags
  map.resources :views
  map.resources :widgets
  map.resources :galleries
  map.resources :images
  map.resources :virtual_models
  map.resources :links
  map.resources :link_groups
  map.resources :helptexts
  map.resources :forms
  map.resources :suggestions
  map.resources :clients
  map.resources :reservations
  
  map.resource :site_setting
  
  # greyresults
  map.resources :listings, :collection => { :import => :post }
  
  map.paperclip_attachment '/images/:id', :controller => 'images', :action => 'show'
  
  # Sample resource route with options:
  #   map.resources :products, :member => { :short => :get, :toggle => :post }, :collection => { :sold => :get }
  
  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [ :comments, :sales ], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => { :recent => :get }
  #   end
  map.resources :users do |user|
    user.resources :posts, :collection => { :published => :get }
    user.resources :images
    user.resources :comments
    user.resources :tags
    user.resources :permissions
    user.resources :listings
  end
  
  map.resources :pages do |page|
    page.resources :views
    page.resources :blocks
    page.resources :tags
    page.resources :suggestions
  end
  
  map.resources :posts do |post|
    post.resources :views
    post.resources :blocks
    post.resources :tags
  end
  
  map.resources :blocks do |block|
    block.resources :views
    block.resource :widget
  end
  
  map.resources :galleries do |block|
    block.resources :images
  end
  
  map.resources :groups do |group|
    group.resources :links
  end
  
  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end
  
  map.ajax '/ajax/:action', :controller => 'ajax', :action => nil 
  map.tagged_with '/:model/tagged-with/:tag', :controller => 'tags', :action => 'show'
  
  # search results module
  map.connect ':title/:query', :controller => 'pages', :action => 'show', :title => nil, :query => nil
  
  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  map.root :controller => 'pages', :action => 'show', :title => 'home'

  # See how all your routes lay out with "rake routes"

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing or commenting them out if you're using named routes and resources.
  map.connect ':title', :controller => 'pages', :action => 'show', :title => nil
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
