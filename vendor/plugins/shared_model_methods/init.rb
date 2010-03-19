# Include hook code here
require 'shared_model_methods'
ActiveRecord::Base.send(:include, SharedModelMethods)
