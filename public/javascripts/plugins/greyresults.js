// Greyresults 
// Diego Salazar, Grey Robot, Inc. April, 2010
//
// bind event handlers and implement ajax functionality for search results.
// first implemented for storage locator

$.fn.greyresults = function() {
	return this.each(function() {
		$('.panel', this).hide();
		
		$('.tab_link', this).live('click', function() {
			var $this			= $(this),
					$listing	= $this.parent().parent().parent(),
					$panel		= $('.panel', $listing).addClass('active'),
					$progress = $('.progress', $listing).addClass('active');
			
			$.get(this.href, function(response) {
				$('.tab_link').removeClass('active').removeClass('box_shadow_bottom');
				$('.listing').removeClass('active');
				$('.panel').removeClass('active');
				
				$this.addClass('active box_shadow_bottom');
				$listing.addClass('active');
				$panel.addClass('active');
				
				$('.panel:not(.active)').slideUp();
				$panel.html(response).slideDown(300, function(){
					$('.progress', '.tabs').removeClass('active');
				});
			});
			
			return false;
		})
	});
}

$('.listings_wrap', '#listings_main').greyresults();