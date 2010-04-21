module ListingsHelper
  
  def greyresult_panel_template(listing, &content)
    html  = "\n<h5 class=\"white dark_text_shadow\">#{listing.title}</h5>\n<div class=\"inner border_box\">"
      html << yield
    html << "</div>\n"
  end
  
end
