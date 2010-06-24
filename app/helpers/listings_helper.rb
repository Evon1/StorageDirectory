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
      '<span class="block bold font110">' + number_with_precision(listing.distance, :precision => 1) + '</span>Miles'
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
    
    html = "<span>Showing <span id='results_range'>#{range_start}-#{range_end}</span> of #{data.total_entries} results. </span>"
    
    # only show the More link if there are more
    if range_start < data.total_entries - per_page
      more_link_text = "+ Show #{(data.total_entries - range_end) < per_page ? data.total_entries - (range_start + per_page - 1) : per_page} more"
      more_link_text << "<span class='hidden' id='params_pagetitle'>#{@page.title.parameterize}</span>"
      more_link_text << "<span class='hidden' id='params_query'>#{params[:q]}</span>"
      more_link_text << "<span class='hidden' id='params_page'>#{params[:page]}</span>"
      more_link_text << "<span class='hidden' id='params_within'>#{params[:within]}</span>"
      html << link_to(more_link_text, listings_path, :id => 'more_results')
    end
    
    html 
  end
  
end
