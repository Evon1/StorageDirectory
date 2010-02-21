module GalleriesHelper
  
  def gallery_image_object(image)
    GalleryImage.exists?(:image_id => image.id, :gallery_id => @gallery.id) ? 
    GalleryImage.find(:first, :conditions => { :image_id => image.id, :gallery_id => @gallery.id }) : GalleryImage.new
  end
  
end
