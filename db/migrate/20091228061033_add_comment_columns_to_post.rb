class AddCommentColumnsToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :comments_count, :integer, :default => 0
    add_column :posts, :comments_enabled, :boolean
  end

  def self.down
    remove_column :posts, :comments_enabled
    remove_column :posts, :comments_count
  end
end
