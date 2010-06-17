// Greyresults 
// Diego Salazar, Grey Robot, Inc. April, 2010
//
// bind event handlers and implement ajax functionality for search results.
// first implemented for storage locator

$.clicked_on_different_tab = function($tab_link, $listing) {
	var $open_panel = $('.panel:not(:hidden)', '.listing');
	if ($open_panel.length == 0) return true;
	
	var clicked_listing = $open_panel.parent().attr('id'),
			active_listing 	= $listing.attr('id');
	if (active_listing != clicked_listing) return true;
	
	var clicked_tab  = $tab_link.attr('rel'),
			active_panel = $open_panel.attr('rel');
	
	// true when clicking on a different tab in the same result, or the same tab in a different result
	return (clicked_tab != active_panel && active_listing == clicked_listing) || 
				 (clicked_tab == active_panel && active_listing != clicked_listing);
}

// narrow search form sliders
$('.slider').each(function(){
	var $this = $(this),
			value = $('.slider_val', $this.parent()).val();
			
	$this.slider({
		max: 50,
		min:5,
		step: 5,
		animate: true,
		value: value, // reverse the direction of the slider
		start: function(e, ui) {
			var slider = $('.slider_val', $(e.target).parent());
			if (slider.attr('disabled')) slider.attr('disabled', false);
		},
		slide: function(e, ui) {
			$('.slider_val', $(this).parent()).val(ui.value);
		}
	});
});

// panel openers
$('.inner', '.listing').click(function(){ $('.tab_link[rel=map]', $(this).parent()).click(); });
$('.open_tab', '.tabs').click(function(){
	var $this = $(this),
			$panel = $('.panel', $this.parent().parent().parent());
	
	$('.open_tab').text('+');
	
	if (!$this.data('active')) {
		$('.tab_link[rel=map]', $this.parent()).click();
		$this.data('active', true);
		$this.text('x');
	} else {
		$panel.slideUp();
		$('.tab_link, .listing, .panel').removeClass('active');
		$('.tab_link').removeClass('borderButTop');
		$this.data('active', false);
		$('.open_tab').text('+');
	}
	
	return false
})

$.fn.greyresults = function() {
	return this.each(function() {
		// slide open the panel below a result containing a partial loaded via ajax, as per the rel in the clicked tab link
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
					$('.tab_link, .listing, .panel').removeClass('active');
					$('.tab_link').removeClass('borderButTop');

					$this.addClass('active borderButTop');
					$listing.addClass('active');
					$panel.addClass('active');

					$('.panel:not(.active)').slideUp();
					$panel.html(response);
					$('.listing:not(.active) .open_tab').text('+');
					$('.open_tab', $listing).text('x');
					if ($panel.is(':hidden')) $panel.slideDown();
					$('.progress', '.listing').removeClass('active');
					
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

$('.listing', '#rslt-list-bg').greyresults();