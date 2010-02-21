load 'deploy' if respond_to?(:namespace) # cap2 differentiator
load 'config/deploy'

namespace :deploy do

  task :start, :roles => :app do
    run "rm -rf /home/#{user}/public_html; ln -s #{current_path}/public /home/#{user}/public_html"
    run "mv #{current_path}/config/database.yml  #{deploy_to}/shared/database.yml"
    run "ln -s #{deploy_to}/shared/database.yml #{current_path}/config/database.yml"
    run "touch #{deploy_to}/current/tmp/restart.txt"
  end

 task :restart, :roles => :app do
    run "rm -f #{current_path}/config/database.yml; ln -s #{deploy_to}/shared/database.yml #{current_path}/config/database.yml"
     run "touch #{deploy_to}/current/tmp/restart.txt"
  end

 end

