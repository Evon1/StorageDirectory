module WidgetsHelper
  
  def widget_gallery_object(gallery)
    WidgetGallery.exists?(:gallery_id => gallery.id, :widget_id => @widget.id) ? 
    WidgetGallery.find(:first, :conditions => { :gallery_id => gallery.id, :widget_id => @widget.id }) : WidgetGallery.new
  end
  
end
