module BlocksHelper
  
  def block_widget_object(widget)
    BlockWidget.exists? :widget_id => widget.id, :block_id => @block.id ? 
    BlockWidget.find(:first, :conditions => { :widget_id => widget.id, :block_id => @block.id }) : BlockWidget.new
  end
  
  # if a block is specific to the page or post it's on, link to that post or page's edit view and anchor to the blocks
  def contextual_edit_block_path(block)
    active_model = get_active_model_by_path(block.models)
    active_model ? edit_model_path(active_model, :anchor => "#{block.title}Fields-Blocks".gsub(/\W|\s/, '_')) : edit_block_path(block)
  end
  
end
