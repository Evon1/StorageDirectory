module ListingsHelper
  
  def greyresult_panel_template(listing, &content)
    html  = "\n<h5 class=\"white dark_text_shadow\">#{listing.title}</h5>\n<div class=\"inner border_box\">"
      html << yield
    html << "</div>\n"
  end
  
  def google_directions_link(address)
    "http://maps.google.com/maps?f=d&amp;hl=en&amp;daddr=#{address}"
  end
  
  def listing_distance(listing)
    if listing.respond_to? :distance
      number_with_precision(listing.distance, :precision => 1)
    end
  end
  
  def display_location(location)
    "in #{location.city}, #{location.state}" if location.respond_to? :city
  end
  
  def num_entries(data)
    data.respond_to?(:total_entries) ? data.total_entries : 0
  end
  
  def more_results_link(data)
    per_page = data.per_page
    page = params[:page] ? params[:page].to_i : 1
    
    range_start = (per_page * page) - (per_page - 1)
    range_end = (per_page * page) > data.total_entries ? data.total_entries : per_page * page
    remaining = data.total_entries - (range_start + per_page - 1)
    
    html = "<span>Showing <span id='results_range'>#{range_start}-#{range_end}</span> of <span id='results_total'>#{data.total_entries}</span> results. </span>"
    
    # only show the More link if there are more
    if range_start < data.total_entries - per_page
      html << image_tag('/images/ui/ajax-loader-facebook.gif', :class => 'ajax_loader inline') + '&nbsp;'
      html << link_to("+ Show #{remaining < per_page ? remaining : per_page} more", '#more', :id => 'more_results')
      html << "<span class='hidden' id='params_pagetitle'>#{@page.title.parameterize}</span>"
      html << "<span class='hidden' id='params_query'>#{params[:q]}</span>"
      html << "<span class='hidden' id='params_page'>#{(params[:page] ? params[:page].to_i : 1) + 1}</span>"
      html << "<span class='hidden' id='params_within'>#{params[:within]}</span>"
    end
    
    html 
  end
  
end
