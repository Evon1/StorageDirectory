module FormsHelper
  
  def block_form_object(form, block)
    block_form = BlockForm.find(:first, :conditions => { :form_id => form.id, :block_id => block.id })
    block_form ? block_form : BlockForm.new
  end
  
  def virtual_form_path(form)
    unless form.target_id.blank?
      model = model_class(form.controller).find(form.target_id) if model_class(form.controller).exists?(form.target_id)
      model_path model
    else
      form.controller.singular.to_sym
    end
  end
  
end
