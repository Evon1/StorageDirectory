// Greyresults 
// Diego Salazar, Grey Robot, Inc. April, 2010
//
// bind event handlers and implement ajax functionality for search results.
// first implemented for storage locator

$('#more_results').click(function(){
	var $this = $(this),
			ajax_loader = $('.ajax_loader', $this.parent()).show();
	
	// params to build the url that will query the same data the visitor searched for, advanced one page
	var pagetitle = $('#params_pagetitle', $this.parent()).text(),
			query = $('#params_query', $this.parent()).text(),
			within = $('#params_within', $this.parent()).text(),
			page = $('#params_page', $this.parent()).text();
	
	// to build each listing object
	var listing_clone = $('.listing:first').clone(),
			results_wrap = $('#rslt-list-bg');
	
	var url = '/'+ pagetitle +'?q=';
	if (query != '') url += query;
	if (within != '') url += '&within='+ within;
	if (page != '') url += '&page='+ page;
	
	$.getJSON(url, function(response){
		ajax_loader.hide();
		
		if (response.success) {
			$.each(response.data, function(i){
				var info 				 = this.info,
						this_listing = listing_clone.clone().attr('id', 'listing_'+ info.id),
						map 				 = this.map,
						specials		 = this.specials;
				
				// update the content
				$('.rslt-title a', this_listing)				.text(info.title);
				$('.rslt-title a', this_listing)				.attr('href', '/self-storage/show/' + info.id);
				$('.rslt-address', this_listing)				.text(map.address);
				$('.rslt-citystate', this_listing)			.text(map.city + ', ' + map.state + ' ' + map.zip);
				$('.rslt-phone', this_listing)					.text(map.phone);
				$('.rslt-miles span span', this_listing).text(parseFloat(map.distance).toPrecision(2));
				$('.rslt-specials h5', this_listing)		.text(specials.title);
				$('.rslt-specials p', this_listing)			.text(specials.cotent);
				
				// update tab urls
				var map_tab = $('.fac-map a', this_listing);
				if (map_tab) map_tab.attr('href', map_tab.attr('href').replace(/id=\d*/, 'id=' + info.id));
				var sizes_tab = $('.fac-sizes a', this_listing);
				if (sizes_tab) sizes_tab.attr('href', sizes_tab.attr('href').replace(/id=\d*/, 'id=' + info.id));
				var specials_tab = $('.fac-specials a', this_listing);
				if (specials_tab) specials_tab.attr('href', specials_tab.attr('href').replace(/id=\d*/, 'id=' + info.id));
				var pictures_tab = $('.fac-pictures a', this_listing);
				if (pictures_tab) pictures_tab.attr('href', pictures_tab.attr('href').replace(/id=\d*/, 'id=' + info.id));
				
				
				this_listing.appendTo(results_wrap).hide().slideDown(1800);
			});
			
			// this updates the page count so the next time the user clicks, we pull the correct data
			$('#params_page', $this.parent()).text(parseInt(page) + 1);
			
			var range 			= $('#results_range'),
					range_start = parseInt(range.text().split('-')[0]),
					range_end 	= parseInt(range.text().split('-')[1]),
					per_page		= parseInt($('#per_page').text()),
					total 			= parseInt($('#results_total').text()),
					remaining		= total - (range_end + per_page);		
			
			// update the range text and adjust the range end if we're near the end of the data set
			range_end += parseInt($('#per_page').text());
			if (range_end >= total) range_end = total;
			range.text(range_start + '-' + range_end);
			
			if (remaining <= 0) $this.hide();
			if (remaining < per_page) $this.text('+ Show ' + remaining + ' more');
			
		} else alert('Error');
	});
	
	return false;
});

// utitity method
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