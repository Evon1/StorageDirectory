jQuery.fn.GreyRobotSlideShow = function() {
	return this.each(function(){
		var slideshow = new SlideShow;
		slideshow.init(this.id);
	});
	
	function SlideShow() {
		var $ = jQuery;
		var self, slideWrap, showSpeed, fadeOutSpeed, fadeInSpeed;
		var intId = 0;
		var slideIndex = 0; 
		var imgDir = '';
		var imgs = SlideShowImages;
		var stopped = true;
	
		this.init = function(element_id, options) {
			options = options || {};
		
			self 				 = this; // instance of slideshow
			imgs 				 = options.images || imgs;
			slideWrap 	 = element_id || 'slideshow';
			showSpeed 	 = options.speed 		 || 7000;
			fadeOutSpeed = options.foSpeed 	 || 1000;
			fadeInSpeed  = options.fiSpeed 	 || 1000;
			
			build_controls();
			apply_css();
			register_events();
		
			start();
		}
	
		function start() {
			if (stopped) {
				switch_active_control('slideshow_play_btn');
				advance();
				intId = setInterval(advance, showSpeed); 
				stopped = false;
			}
		}
		
		function pause() {
			if (!stopped) {
				switch_active_control('slideshow_pause_btn');
				clearInterval(intId);
				stopped = true;
			}
		}
		
		function advance() {
			$('img', '#slide').fadeOut(fadeOutSpeed, function(){
				mark_inactive($('.index', '#slide_index'));
			
				$('img', '#slide').attr({ src : imgDir + imgs[slideIndex], alt : nice_name(imgs[slideIndex]) }).fadeIn(fadeInSpeed);
				mark_active($('.index', '#slide_index').eq(slideIndex));
				slideIndex++; 
			
				if (slideIndex == imgs.length) slideIndex = 0;
			}); 
		}
		
		function jump_to(index) {
			slideIndex = parseInt(index);
			mark_inactive($('.index', '#slide_index'));
		
			$('img', '#slide').attr('src', imgDir + imgs[slideIndex]);
			mark_active($('.index', '#slide_index').eq(slideIndex));
			
			slideIndex++;
			
			if (!stopped) {
				clearInterval(intId);
				intId = setInterval(advance, showSpeed);
			}
		}
		
		function build_controls() {
			$(css_id(slideWrap)).html('<div id="slide"></div><div id="slide_index"></div>');
			$('#slide', css_id(slideWrap)).append('<img src="' + imgDir + imgs + '" alt="' + imgs[slideIndex] + '"/>');
		
			for (var i = 1, len = imgs.length; i <= len; i++) {
				$('#slide_index', css_id(slideWrap)).append("<span id='img_" + (i-1).toString() + "' class='index'>" + i + "</span>");
			}
		
			$('#slide_index', css_id(slideWrap)).append('<span id="slideshow_play_btn" class="control active">></span><span id="slideshow_pause_btn" class="control">||</span>')
			$('.index', '#slide_index').eq(0).addClass('active');
		}
		
		function apply_css() {
			$(css_id(slideWrap)).css({ 'width':'100%', 'height':'350px', 'position':'relative', 'background':'black', 'overflow':'hidden', 'margin-bottom':'10px' });
			$('img', '#slide').css({ 'height':'100%', 'position':'absolute', 'top':'0' });
			$(css_id(slideWrap), '.side').css({ 'height':'120px', 'font-size':'12px', 'font-weight':'bold' });
			$('#slide img', '.side').css({ 'height':'120px', 'width':'150px' });
			$('#slide_index').css({ 'position':'absolute', 'bottom':'0px', 'left':'3px', 'height':'30px', 'width':'100%' });
			$('#slide_index', '.side').css({ 'height':'20px' });
			$(css_id(slideWrap) + ' .index, ' + css_id(slideWrap) + ' .control').css({
				'font-family':'Arial, Helvetica, sans-serif',
				'height':'30px',
				'width':'30px',
				'border':'2px solid gray',
				'padding':'3px 5px',
				'margin':'0 4px',
				'color':'gray',
				'cursor':'pointer'
			});
			$(css_id(slideWrap) + ' .index, ' + css_id(slideWrap) + ' .control', '.side').css({
				'border':'0 none',
				'padding':'0',
				'margin':'0 2px',
				'color':'gray',
				'cursor':'pointer'
			});
			$('#slideshow_play_btn', css_id(slideWrap)).css({ 'margin-left':'8px' });
			$('.control', css_id(slideWrap)).css({ 'font-weight':'bold' });
			$('.active', css_id(slideWrap)).css({ 'border-color':'white', 'color':'white' });
			$('.current_index', css_id(slideWrap)).css({ 'border-color':'#0CF', 'color':'#0CF' });
			$('.index, .control', css_id(slideWrap)).hover(function(){
				$(this).css({ 'border-color':'white', 'color':'white' });
			},function(){
				if ($(this).hasClass('active')) {
					mark_active(this);
				} else {
					mark_inactive(this);
				}
			});
		}
	
		function register_events() {
			$('.index', '#slide_index').click(function(){ jump_to(this.id.replace('img_', '')); });
			$('#slideshow_play_btn', css_id(slideWrap)).click(start);
			$('#slideshow_pause_btn', css_id(slideWrap)).click(pause);
		}
	
		function switch_active_control(control) {
			mark_inactive($('.control', css_id(slideWrap)));
			mark_active($('#' + control, css_id(slideWrap)));
		}
		
	  function mark_active(o) {
			$(o).css({ 'border-color':'white', 'color':'white' }).addClass('active');
		}
		
		function mark_inactive(o) {
			$(o).css({ 'border-color':'gray', 'color':'gray' }).removeClass('active');
		}
		
		function nice_name(file_name) {
			return file_name.replace(/\..{1,4}$/, '');
		}
		
		function css_id(str) { // return a string to use as a CSS ID selector
			if (str.substr(0, 1) == '#') return str;
			return '#' + str;
		}
	}
}