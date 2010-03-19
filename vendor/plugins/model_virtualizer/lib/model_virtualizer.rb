# ModelVirtualizer
# Copyright (c) 2009 Diego E. Salazar

# stores array of hashes, key-value pairs, in the model field
# stores schemas of each model, using model_id and model_type as a primary key in finding the model in the hash array

# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:

# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

module ActiveRecord #:nodoc:
  module ModelVirtualizer # => 
    
    def self.included(base)
      base.extend(ClassMethods)
    end

    module ClassMethods
      
      def virtualize
                
        self.find_each do |virtual_model|
          
          json_string_to_hash(virtual_model.model).keys.each do |attribute|
            # add instance methods
          end
          
        end
        
        include ActiveRecord::ModelVirtualizer::InstanceMethods
        extend ActiveRecord::ModelVirtualizer::SingletonMethods
      end
      
      private
      
      def json_string_to_hash(string)
        eval(string.gsub(/\\/, '').gsub(':', ' => ')).symbolize_keys unless string.nil?
      end
      
    end

    module SingletonMethods
      
      def initialize(attributes = {})
        model_hash.each_pair do |k, v|
          self.instance_eval <<-RUBY
            attr_accessor #{k.to_sym}
            @#{k} = #{v}
          RUBY
        end
        
        schema_hash.each_pair do |k, v|
          self.instance_eval <<-RUBY
            attr_accessor #{k.to_sym}
            @#{k} = #{v}
          RUBY
        end
      end
      
    end

    module InstanceMethods
      
      def model_hash # => json string to hash object
        json_string_to_hash(self.model)
      end

      def schema_hash # => json string to hash object
        json_string_to_hash(self.schema)
      end
      
    end
    
  end
end

ActiveRecord::Base.send(:include, ActiveRecord::ModelVirtualizer)
