// Greyresults 
// Diego Salazar, Grey Robot, Inc. April, 2010
//
// bind event handlers and implement ajax functionality for search results.
// first implemented for storage locator

// opens the reserve form in the unit sizes tab in the single listing page
$('.open_reserve_form').click(function(){
	var $this = $(this),
		rform = $('.reserve_form', $this.parent());
	
	if (rform.hasClass('active')) {
		rform.slideUp().removeClass('active');
		$('.sl-table').removeClass('active');
	} else {
		$('.reserve_form').slideUp().removeClass('active');
		$('.sl-table').removeClass('active');
		$('.sl-table', rform.parent()).addClass('active');
		rform.slideDown().addClass('active');
	}
	
	$('input[type=text]:first', rform).focus();
	
	return false;
});

//opens the reserve form in the listing results page
$('.rslt-reserve').click(function(){
	var $this = $(this);
});

/* AJAX pagination, load next page results in the same page */
$('#more_results').click(function(){
	var $this = $(this),
		ajax_loader = $('.ajax_loader', $this.parent()).show();
	
	$this.find('span').hide(); // the plus sign
	
	// params to build the url that will query the same data the visitor searched for, advanced one page
	var pagetitle = $('#params_pagetitle', $this.parent()).text(),
		query 	  = $('#params_query', $this.parent()).text(),
		within 	  = $('#params_within', $this.parent()).text(),
		page 	  = $('#params_page', $this.parent()).text();

	// to build each listing object
	var listing_clone = $('.listing:first').clone(),
		results_wrap = $('#rslt-list-bg');
	
	var url = '/'+ pagetitle +'?q=';
	if (query != '') url += query;
	if (within != '') url += '&within='+ within;
	if (page != '') url += '&page='+ page;
	
	$.getJSON(url, function(response){
		ajax_loader.hide();
		$this.find('span').show(); // the plus sign
		
		if (response.success) { // returned some listings
			// we get an array JSON objects, each represents a listing including related models attributes
			$.each(response.data, function(i){
				var info 				 = this.info, // listing attributes
						this_listing = listing_clone.clone().attr('id', 'listing_'+ info.id), // a new copy of a .listing div
						map 				 = this.map, // related model attributes
						specials		 = this.specials;
						
				// update tab urls
				var tabs = [
					$('.fac-map a', this_listing),
					$('.fac-sizes a', this_listing),
					$('.fac-specials a', this_listing),
					$('.fac-pictures a', this_listing)
				];

				for (var i = 0, len = tabs.length; i < len; i++) {
					if (tabs[i]) {
						var new_tab_href = tabs[i].attr('href').replace(/id=\d*/, 'id=' + info.id);
						tabs[i].attr('href', new_tab_href);
					}
				}
				
				// update the content in the copy of the listing html and add it to the dom
				$('.rslt-title a', this_listing)				.text(info.title);
				$('.rslt-title a', this_listing)				.attr('href', '/self-storage/show/' + info.id);
				$('.rslt-address', this_listing)				.text(map.address);
				$('.rslt-citystate', this_listing)			.text(map.city + ', ' + map.state + ' ' + map.zip);
				$('.rslt-phone', this_listing)					.text(map.phone);
				$('.rslt-miles span span', this_listing).text(parseFloat(map.distance).toPrecision(2));
				$('.rslt-specials h5', this_listing)		.text(specials.title);
				$('.rslt-specials p', this_listing)			.text(specials.cotent);
				
				this_listing.appendTo(results_wrap).hide().slideDown('slow');

				$('.inner:first', this_listing).effect('highlight', { color: '#c2cee9' }, 1700);
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
			
		} else alert('Ooops, try again');
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
$('.open_tab', '.tabs').click(function(){
	var $this = $(this),
		$panel = $('.panel', $this.parent().parent().parent());
	
	$('.open_tab').text('+');
	
	if (!$this.data('active')) {
		$('.tab_link[rel=map]', $this.parent().parent()).click();
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
			$('.open_tab').data('active', false);
			var $this		= $(this),
				$listing	= $this.parent().parent().parent(),
				$panel		= $('.panel', $listing).addClass('active'),
				$progress = $('.progress', $listing);
					
			// show progress and do ajax call unless we're clicking on the same tab again
			if ($.clicked_on_different_tab($this, $listing, $panel)) {
				$progress.addClass('active');
				$panel.attr('rel', this.rel);
				
				$.get(this.href, function(response) {
					$('.tab_link, .listing, .panel').removeClass('active');
					$('li', '.tabs').removeClass('active');
					$this.parent().addClass('active');
					
					$this.addClass('active');
					$listing.addClass('active');
					$panel.addClass('active');

					$('.panel:not(.active)').slideUp();
					$panel.html(response);
					
					$('.listing:not(.active) .open_tab').text('+');
					$('.open_tab', $listing).data('active', true).text('x');
					
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