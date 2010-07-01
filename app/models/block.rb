class Block < ActiveRecord::Base

  has_many_polymorphs :models, :from => [:pages, :posts, :links]
  
  has_one :module, :class_name => 'ModelsModule', :as => :model
  accepts_nested_attributes_for :module, :allow_destroy => true
  has_one :block_widget
  has_one :widget, :through => :block_widget
  accepts_nested_attributes_for :block_widget
  
  
  has_many :models_views, :as => :model, :dependent => :destroy
  has_many :views, :through => :models_views
  
  has_many :block_forms, :dependent => :destroy
  has_many :forms, :through => :block_forms
  has_many :enabled_forms, :through => :block_forms, :conditions => 'block_forms.enabled IS TRUE', :source => :form
  
  validates_uniqueness_of :title
  validates_presence_of :title
  
  access_shared_methods
  
  # Class Methods
  def self.all_for_index_view
    all :select => 'title, description, id'
  end

  # Instance Methods
  def enabled_in?(model)
    blocks_model = self.blocks_models.find(:first, :conditions => ['model_type = ? AND model_id = ?', model.class.name, model.id])
    blocks_model ? blocks_model.enabled : false
  end
  
  def is_global?
    !show_in_all.blank?
  end
  
  def is_local?
    self.show_in_all.blank? && !self.restful?
  end
  
  def show_title_in_this(region, global)
    if defined?(global) && global
      self.show_title
    else
      bm = self.blocks_models.find_by_place(region)
      bm ? bm.show_title : nil
    end if defined?(region)
  end
  
  # if block is updated to a show_in_all region, destroy any enabled blocks_models relations that have the same region
  def before_save
    self.blocks_models.each do |bm|
      bm.destroy if !bm.enabled || (bm.place == self.show_in_all)
    end
  end
  
end
