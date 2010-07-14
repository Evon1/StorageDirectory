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

// edit functionality for the sizes in the facility edit page
$('.edit-btn', '.authenticated .sl-table').click(function(){
	var $this 			= $(this),
		container 		= $this.parent().parent(),
		hidden_form		= $('.hidden_form', container.parent()),
		cancel_btn		= $('.cancel_btn', container.parent()),
		size_id			= $('input[name=size_id]', container).val(),
		sizes_li 		= $('.st-size', container),
		type_li 		= $('.st-type', container),
		price_li 		= $('.st-pric', container),
		specials_li 	= $('.st-spec', container),
		reset_li 		= $('.st-rese', container),
		load_li 		= $('.st-sele', container),
		
		// to revert the content on cancel
		sizes_orig		= sizes_li.text(),
		type_orig		= type_li.text(),
		price_orig		= price_li.html(),
		specials_orig  = specials_li.html(),
		
		// we needed to adjust the size of the sizes li to stop the inputs within from breaking to a new line, we save the original css here to revert later
		sizes_li_adjustment = { 'margin-left': '13px', 'width': '67px' },
		sizes_li_revertment = { 'margin-left': sizes_li.css('margin-left'), 'width': sizes_li.css('width') };
	
	if ($(this).text() == 'Edit') {
		// build the input fields with the original values preset
		var x = sizes_orig.split(/\W?x\W?/)[0],
			y = sizes_orig.split(/\W?x\W?/)[1],
			xi = '<input type="text" size="3" maxlength="3" class="small_num i" name="size[x]" value="'+ x +'" />',
			yi = '<input type="text" size="3" maxlength="3" class="small_num i" name="size[y]" value="'+ y +'" />',
			ti = '<input type="text" class="small_text_field i" name="size[unit_type]" value="'+ type_orig +'" />',
			pi = '<input type="text" size="8" maxlength="8" class="small_text_field i" name="size[price]" value="'+ price_orig.replace('$', '') +'" />',
			si = '<input type="text" class="small_text_field i" name="size[special]" value="'+ specials_orig +'" />';
		
		// replace the content in the unit size row
		sizes_li.css(sizes_li_adjustment).html(xi +' x '+ yi);
		type_li.html(ti);
		price_li.html('<span class="left">$ </span>'+ pi);
		specials_li.html(si);
		
		cancel_btn.show();
		$this.text('Save');
		
	} else if ($(this).text() == 'Save') {
		// loading anim
		load_li.addClass('active_load');
		cancel_btn.hide();
		
		// clone the inputs and put into the hidden form in order to serialize the data
		$('input.i', container).each(function(){ hidden_form.append($(this).clone()); });
		console.log(hidden_form)
		$.post(hidden_form.attr('action'), hidden_form.serialize(), function(response){
			if (response.success) {
				// update the row with the new values
				var sizes_html = $('input[name="size[x]"]', container).val() +' x '+ $('input[name="size[y]"]', container).val();
				sizes_li.css(sizes_li_revertment).html(sizes_html);
				
				var type_html = $('input[name="size[unit_type]"]', container).val();
				type_li.html(type_html);
				
				var price_html = $('input[name="size[price]"]', container).val();
				price_li.html(price_html);
				
				var specials_html = $('input[name="size[special]"]', container).val();
				specials_li.html(specials_html);
				
				$this.text('Edit');
				cancel_btn.hide();
				
			} else alert('nay');
			
			load_li.removeClass('active_load');
			
		}, 'json');
	}
	
	cancel_btn.click(function(){
		// revert to original content
		sizes_li.html(sizes_orig).css(sizes_li_revertment);
		type_li.html(type_orig);
		price_li.html(price_orig);
		specials_li.html(specials_orig);
		
		$this.text('Edit');
		cancel_btn.hide();
		return false;
	});
	
	return false;
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
				$listing	= $this.parents('.listing'),
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
						
					} else if ($this.attr('rel') == 'reserve') {
						$('.mini_calendar', $panel).datepicker();
						$('.datepicker_wrap', $panel).click(function(){ $('.mini_calendar', this).focus(); });
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