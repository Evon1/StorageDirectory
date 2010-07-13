# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20100705224006) do

  create_table "block_forms", :force => true do |t|
    t.integer  "block_id"
    t.integer  "form_id"
    t.boolean  "enabled"
    t.integer  "position"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "block_widgets", :force => true do |t|
    t.integer  "block_id"
    t.integer  "widget_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "blocks", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title"
    t.text     "description"
    t.text     "content"
    t.boolean  "show_title"
    t.string   "show_in_all"
    t.integer  "position",         :default => 0
    t.boolean  "process_erb"
    t.boolean  "use_placeholders"
    t.boolean  "restful"
    t.string   "controller"
    t.string   "action"
    t.string   "restful_region"
  end

  create_table "blocks_models", :force => true do |t|
    t.integer  "model_id"
    t.string   "model_type"
    t.integer  "block_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "place"
    t.boolean  "enabled"
    t.boolean  "show_title"
    t.integer  "position",   :default => 0
  end

  create_table "comments", :force => true do |t|
    t.string   "title",            :limit => 50, :default => ""
    t.string   "comment",                        :default => ""
    t.datetime "created_at",                                     :null => false
    t.integer  "commentable_id",                 :default => 0,  :null => false
    t.string   "commentable_type", :limit => 15, :default => "", :null => false
    t.integer  "user_id",                        :default => 0,  :null => false
    t.string   "email"
  end

  add_index "comments", ["user_id"], :name => "fk_comments_user"

  create_table "fields", :force => true do |t|
    t.string   "field_type"
    t.text     "field_attributes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "form_id"
    t.boolean  "use_own_name"
    t.integer  "position",         :default => 0
  end

  create_table "forms", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "controller"
    t.string   "action"
    t.boolean  "enabled"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "scope"
    t.integer  "target_id"
    t.boolean  "send_email"
    t.string   "recipient"
    t.boolean  "use_reverse_captcha"
    t.boolean  "show_title"
  end

  create_table "galleries", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
  end

  create_table "gallery_images", :force => true do |t|
    t.integer  "gallery_id"
    t.integer  "image_id"
    t.integer  "order"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "groups", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "helptexts", :force => true do |t|
    t.string   "model"
    t.text     "text"
    t.text     "examples"
    t.boolean  "show"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "images", :force => true do |t|
    t.string   "title"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.text     "description"
    t.text     "content"
  end

  create_table "links", :force => true do |t|
    t.string   "title"
    t.string   "path"
    t.boolean  "relative"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "group_id"
    t.string   "resource"
    t.integer  "target_id"
  end

  create_table "listing_sizes", :force => true do |t|
    t.integer  "listing_id"
    t.integer  "size_id"
    t.integer  "position",   :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "listings", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.boolean  "enabled"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "maps", :force => true do |t|
    t.integer  "listing_id"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.integer  "zip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "phone"
    t.float    "lat"
    t.float    "lng"
  end

  create_table "models_modules", :force => true do |t|
    t.string   "name"
    t.integer  "model_id"
    t.string   "model_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "models_views", :force => true do |t|
    t.integer  "view_id"
    t.integer  "model_id"
    t.string   "model_type"
    t.string   "order"
    t.integer  "position"
    t.integer  "limit"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "view_type"
    t.text     "fields"
    t.boolean  "enabled"
    t.string   "conditions"
    t.boolean  "paginate"
  end

  create_table "pages", :force => true do |t|
    t.string   "title"
    t.integer  "parent_id"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "show_in_nav"
    t.text     "content"
    t.text     "description"
    t.boolean  "show_title"
    t.integer  "position",         :default => 0
    t.boolean  "process_erb"
    t.boolean  "use_placeholders"
  end

  create_table "permissions", :force => true do |t|
    t.string   "resource"
    t.string   "action"
    t.string   "scope"
    t.integer  "role_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pictures", :force => true do |t|
    t.integer  "listing_id"
    t.string   "title"
    t.text     "description"
    t.integer  "position",    :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "posts", :force => true do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "user_id"
    t.boolean  "published"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "comments_count",   :default => 0
    t.boolean  "comments_enabled"
  end

  create_table "rates", :force => true do |t|
    t.integer  "rater_id"
    t.integer  "rateable_id"
    t.string   "rateable_type"
    t.integer  "stars",         :null => false
    t.string   "dimension"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "rates", ["rateable_id", "rateable_type"], :name => "index_rates_on_rateable_id_and_rateable_type"
  add_index "rates", ["rater_id"], :name => "index_rates_on_rater_id"

  create_table "reservations", :force => true do |t|
    t.integer  "listing_id"
    t.integer  "user_id"
    t.string   "status"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sizes", :force => true do |t|
    t.string   "title"
    t.integer  "x"
    t.integer  "y"
    t.string   "unit"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "specials", :force => true do |t|
    t.integer  "listing_id"
    t.string   "title"
    t.string   "description"
    t.string   "content"
    t.string   "code"
    t.boolean  "enabled"
    t.integer  "position",    :default => 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "suggestions", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "controller"
    t.string   "action"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "taggings", :force => true do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "taggable_type"
    t.string   "context"
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id"], :name => "index_taggings_on_tag_id"
  add_index "taggings", ["taggable_id", "taggable_type", "context"], :name => "index_taggings_on_taggable_id_and_taggable_type_and_context"

  create_table "tags", :force => true do |t|
    t.string "name"
  end

  create_table "us_cities", :force => true do |t|
    t.string   "state"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "us_cities", ["name"], :name => "index_us_cities_on_name"
  add_index "us_cities", ["state"], :name => "index_us_cities_on_state"

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "crypted_password"
    t.string   "password_salt"
    t.string   "persistence_token"
    t.integer  "login_count"
    t.integer  "failed_login_count"
    t.datetime "last_request_at"
    t.datetime "current_login_at"
    t.datetime "last_login_at"
    t.string   "current_login_ip"
    t.string   "last_login_ip"
    t.integer  "facebook_uid",       :limit => 8
    t.integer  "role_id"
    t.string   "type"
    t.string   "company"
  end

  create_table "views", :force => true do |t|
    t.string   "model_name"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "scope"
    t.integer  "owner_id"
  end

  create_table "virtual_models", :force => true do |t|
    t.text     "model"
    t.text     "schema"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "widget_galleries", :force => true do |t|
    t.integer  "widget_id"
    t.integer  "gallery_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "widgets", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "content"
  end

end
