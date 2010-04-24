// Greyresults 
// Diego Salazar, Grey Robot, Inc. April, 2010
//
// bind event handlers and implement ajax functionality for search results.
// first implemented for storage locator

$.clicked_on_different_tab = function($tab_link, $listing) {
	var $open_panel			= $('.panel:not(:hidden)', '.listing'),
			clicked_tab 		= $tab_link.attr('rel'),
			active_panel		= $open_panel.attr('rel'),
			clicked_listing = $open_panel.parent().attr('id'),
			active_listing 	= $listing.attr('id');
			
	if ($open_panel.length == 0) return true;
	
	// true when clicking on a different tab in the same result, or the same tab in a different result
	return (clicked_tab != active_panel && active_listing == clicked_listing) || 
				 (clicked_tab == active_panel && active_listing != clicked_listing);
}

$.fn.greyresults = function() {
	return this.each(function() {
		$('.inner', '.listing').click(function(){ $('.tab_link[rel=map]', $(this).parent()).click(); })
		
		// slide open the panel below a result containing a partial loaded via ajax, as per the href in the clicked link
		$('.tab_link', this).live('click', function() {
			var $this			= $(this),
					$listing	= $this.parent().parent().parent(),
					$panel		= $('.panel', $listing).addClass('active'),
					$progress = $('.progress', $listing);
			
			// show progress and do ajax call unless we're clicking on the same tab again
			if ($.clicked_on_different_tab($this, $listing, $panel)) {
				$progress.addClass('active');
				$panel.attr('rel', this.rel);
				
				$.get(this.href, function(response) {
					$('.tab_link, .listing, .panel').removeClass('active').removeClass('box_shadow_bottom');

					$this.addClass('active box_shadow_bottom');
					$listing.addClass('active');
					$panel.addClass('active');

					$('.panel:not(.active)').slideUp();

					$panel.html(response);

					if ($panel.is(':hidden')) $panel.slideDown(300, function(){
						$('.progress', '.tabs').removeClass('active');
					});
					
					// load the google map into an iframe
					if ($this.attr('rel') == 'map') {
						var $map_wrap = $('.map_wrap', $panel);
						$map_wrap.append('<iframe />');
						$('iframe', $map_wrap).src('/ajax/get_map_frame?model=Listing&id='+ $listing.attr('id').split('_')[1]);
					}
				});
			}
			
			return false;
		})
	});
}

$('.listings_wrap', '#listings_main').greyresults();