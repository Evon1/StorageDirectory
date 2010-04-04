<<<<<<< HEAD
set :application, "GreyrobotApp"
set :domain, "68.233.10.61"
set :user, "greyrob"
set :repository, "#{user}@#{domain}:/home/#{user}/git/GreyrobotApp_new"
=======
set :application, "thelodge"
set :domain, "68.233.10.61"
set :user, "greyrob"
set :repository, "#{user}@#{domain}:/home/#{user}/git/thelodge"
>>>>>>> 86c93d6b2f859876d66a471b9608802dfe3d0b59
set :scm, :git
set :use_sudo, false
set :deploy_via, :checkout
set :deploy_to, "/home/#{user}/apps/#{application}"
set :chmod755, "app config db lib public vendor script script/* public/disp*"
set :scm_username, user
set :runner, user
set :branch, "master"
set :git_shallow_clone, 1
default_run_options[:pty] = true
role :app, domain
role :web, domain
role :db,  domain, :primary => true
set :rails_env, 'production'
