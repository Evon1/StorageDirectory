module ViewsHelper
  
  def models_view_object(view, model)
    ModelsView.exists?(:view_id => view.id, :model_id => model.id, :model_type => model.class.name) ? 
    ModelsView.find(:first, :conditions => { :view_id => view.id, :model_id => model.id, :model_type => model.class.name }) : 
    ModelsView.new
  end
  
end