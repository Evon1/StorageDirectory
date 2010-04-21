module GreyModules
  
  @@module_dir = '/lib/grey_modules/'
  
  def get_modules
    @modules ||= get_list_of_file_names('/lib/grey_modules')
  end
  
  def load_grey_module
    @gm_model = eval "@#{controller_name.singular}"
    
    unless we_need_to_load_one
      _disabled_module(@gm_model)
    else
      self.class.require _grey_module
      @model_data = _grey_module_class.init @gm_model, params
    end
  end
  
  private
  
  def we_need_to_load_one
    action_name == 'show' && !@gm_model.nil? && !@gm_model.module.blank? && @gm_model.module.name.downcase != 'normal'
  end
  
  def _grey_module
    ".#{@@module_dir}#{@gm_model.module.name}/#{@gm_model.module.name}.rb"
  end
  
  def _grey_module_class
    @gm_model.module.name.camelcase.constantize
  end
  
  def _disabled_module(model)
    if block = _has_search_block(model)
      model.blocks_model.find_by_block_id(block.id).update_attribute :enabled, false
    end
  end
  
  def _has_search_block(model)
    model.blocks.detect { |b| b.title == 'Search Results' }
  end
  
end