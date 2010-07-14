/***************** UTILITY FUNCTIONS *****************/
$.option_tags_from_model = function(model_class, models, options) {
	var attribute = options.attribute || 'name',
	 		select_prompt = options.select_prompt || false,
			option_tags = select_prompt ? '<option value="">' + select_prompt + '</option>' : '';
	
	$.each(models, function(i) {
		if (attribute == 'name' && !this[model_class]['name']) attribute = 'title';
		else if (attribute == 'title' && !this[model_class]['title']) attribute = 'name';
		
		option_tags += '<option value="' + this[model_class]['id'] + '">(' + this[model_class]['id'] +') ' + this[model_class][attribute] + '</option>';
	});
	
	return option_tags;
}

$.option_tags_from_array = function(options, selected) {
	var options_tags = '';
	
	$.each(options, function(){
		options_tags += '<option'+ (selected && selected == this ? 'selected="selected"' : '') +' value="'+ this +'">'+ this + '</option>';
	});
	
	return options_tags;
}

$.log = function(msg) {
	if (typeof console != 'undefined') console.log(msg); else alert(msg);
}

$.ajax_error = function(response) {
	alert(response.data);
	//$('#body').prepend('<div class="flash error hide">'+ response.data +'</div>').slideDown();
}

// take an array of actions and controllers to see if any pair of those match the page we're on
// either set can be a single action or controller as a string or a comma separated string of multiple actions or controllers
$.on_page = function(route_sets) { // routes looks like: [ ['edit, new', 'views, forms, links'], ['index', 'pages'] ]
	var i = route_sets.length,
			actions,
			controllers,
			route = [
				$('body').attr('class').split(' ')[0].replace('_action', ''),
				$('body').attr('id').replace('_controller', '')
			];
	
	while (i--) { // iterate through all the action/controller sets
		actions 		= route_sets[i][0].split(/,\W?/);
		controllers = route_sets[i][1].split(/,\W?/);
		
		var j = actions.length;
		while (j--) { // check each action
			if (route[0] != actions[j]) continue; // skip to the next one
			
			var k = controllers.length;
			while (k--) { // action matched, now match with a controller
				if (route[1] == controllers[k]) return true;
			}
		}
	}
}

$.get_auth_token = function() {
	var token = $('input[name=authenticity_token]').val();
	return token;
}

$.validateAnimationAction = function(action) {
	return /^show$|^hide$|^slideDown$|^slideUp$/.test(action);
}

$.switch_action_hash = function(this_el, action, elementClass, contextClass) {
	action = $.switch_actions(action);
	$(this_el).attr('href', $(this_el).attr('href').split('#')[0] + '#' + action + '_' + elementClass + '_' + contextClass); 
	$(this_el).toggleClass('toggle_down');
}

// return the opposite action
$.switch_actions = function(action) {
	var action_sets = [
		['show',						'hide'],
		['fadeIn',			 'fadeOut'],
		['slideDown',		 'slideUp'],
		['addClass', 'removeClass']
	];
	
	var i = action_sets.length; 
	while (i--) { // return the opposite of the action in question
		if (action_sets[i].indexOf(action) >= 0) return action_sets[i][(action_sets[i].indexOf(action) ^ 1)];
	}
}

$.disable = function(disabler, disablee) {
	$(disablee, disabler.parent().parent()).each(function(i){
		if (this.name != disabler.attr('name')) $(this).attr('disabled', !disabler.data('enabled'));
	});
}

$.disableToggle = function(disabler, disablees) {
	disabler.data('enabled', !disabler.data('enabled'));
	$.disable(disabler, disablees);
}

// call a jquery show/hide method on matching element from the selectors present in the href
$.toggleAction = function(href, scroll_to_it) {
	var url_hash = href.split('#');
	
	if (url_hash[1]) {
		url_hash					= url_hash[1],
		 		action				= url_hash.split('_')[0],
				elementClass	= url_hash.split('_')[1],
				contextClass	= url_hash.split('_')[2],
				target			  = $('.' + elementClass, '.' + contextClass);
		
		// validate action name and do it.
		if ($.validateAnimationAction(action)) {
			var context = $('.' + contextClass);
			var actionLink = $('.toggle_action', context);
			
			// change the state of the toggle_action link
			if (actionLink.length) $.switch_action_hash($('.toggle_action', context), action, elementClass, contextClass);
			
			if (scroll_to_it) $(document).scrollTo(context, 800);
			
			target[action]();
		}
	}
	
}

// first implemented for the sortable nav bar to update position via ajax
$.updateModels = function(e, ui) {
	var list_items  = ui.item.parent().children(),
			$this			 	= $(ui.item),
			data 				= '';
			
	// build query string
	$(list_items).each(function(i){ // html element id is <ModelClass>_<int ID>
		var model_class = this.id.split('_')[0],
				model_id 		= this.id.split('_')[1],
				model_attr 	= $this.attr('rel'); // attribute to update
				
		data += 'models['+ i +'][model]='+ model_class + '&models['+ i +'][id]='+ model_id +
						'&models['+ i +'][attribute]='+ model_attr +'&models['+ i +'][value]='+ i + '&';
	});
	
	$.post('/ajax/update_many', data, function(response){
		if (response.success) {
			$this.effect('bounce', {}, 200);
		} else {
			$.ajax_error(response);
		}
	}, 'json');
}

// retrieve the attributes/columns of given resource/model, e.g. pages, users, posts
$.getModelAttributes = function(resource, callback) {
	var attributes = [];
	
	$.getJSON('/ajax/get_attributes?model='+ singularize(resource), function(response){
		if (response.success) {
			if (callback && typeof callback == 'function') callback.call(this, response.data);
			else return response.data;
			
		} else {
			$.ajax_error(response);
		}
	});
}

$.injectOptionsInSelectLists = function(field_name_selects, option_tag_html) {
	$.each(field_name_selects, function(){ $(this).html(option_tag_html) });
}

// cause the text_field to turn back into a label on blur, but leave behind a hidden field with its value
$.revertSettingsTextFieldToLabel = function(text_field, old_val) {
	text_field.blur(function(){
		var this_field 			= $(this),
				new_val					= this_field.val(),
				field_container = this_field.parent().parent(),
				setting_field 	= $('.setting_field input', field_container),
				old_field_name 	= setting_field.attr('name');

		this_field.fieldToLabel();
		
		// update the setting field name with the new value from the setting label
		setting_field.attr('name', old_field_name.replace(old_val.toLowerCase(), new_val.toLowerCase()))
		
		if (field_container.hasClass('new_setting_field')) {
			field_container.removeClass('new_setting_field').addClass('existing_setting_field');
		}
	});
}

$.mayContinue = function(link) {
	return !link.hasClass('before_confirm') || (link.hasClass('before_confirm') && confirm(link.attr('title')))
}

/******************************************* JQUERY PLUGINS *******************************************/
$.fn.disabler = function(d) { // master switch checkbox, disables all form inputs when unchecked
	var disablees = d || 'input, textarea, select, checkbox, radio';
	return this.each(function(){
		var $this = $(this);
		
		$this.data('enabled', $this.is(':checked'));
		$.disable($this, disablees);
		
		$this.change(function(){ $.disableToggle($this, disablees) });
	});
}

// watches for anchors in window.location that have valid a element id in spot1 of the hash (#[spot1]_spot2)
// toggle open the container with that id and if theres a valid id in spot2 scroll to on an anchor with id == spot2
$.fn.anchorDispatch = function() {
	var url_hash, listeningElement, anchor;
	
	url_hash = window.location.href.split('#')[1];
	if (!url_hash) 
		return false;
	
	if ($.validateAnimationAction(url_hash.split('_')[0])) 
		return false
	
	listeningElement = $('#' + url_hash.split('_')[0]);
	if (!listeningElement) 
		return false;

	if (url_hash.split('-')[1]) anchor = $('#' + url_hash.split('-')[1]);
	
	return this.each(function(i){
		if (this.id == listeningElement.attr('id')) {
			listeningElement.show();
			$('.collapseable', listeningElement).show().removeClass('hide');
			$('.toggle_action', listeningElement).addClass('toggle_down');
		}
		
		if (anchor) {
			$(document).scrollTo(anchor, 2000);
			$('#'+ url_hash.split('-')[0]).effect('highlight', { color: '#87c881' }, 7000);
		}
	});

} // END $.fn.anchorDispatch()

// click any where on a rowCheckable div to toggle the checkbox within the first child element
$.fn.rowCheckable = function() {
	return this.each(function() {
		var $this = $(this),
		 		checkbox = $('input[type=checkbox]', $this).eq(0);
		
		$this.click(function(e) { // trigger checkbox unless a link is clicked
			if (e.target.tagName == e.currentTarget.tagName) {
				checkbox.trigger('change').attr('checked', !checkbox.is(':checked'));
			}
		});
	});
}

// use a checkbox to switch between two containers. classes: .pane_0, .pane_1
$.fn.paneSwitcher = function() {
	return this.each(function() {
		var context = $(this).parent().parent().parent();
		this.checked ? $('#pane_0', context).hide() : $('#pane_1', context).hide();
		
		$(this).change(function() { // trigger checkbox unless a link is clicked
			$('.pane_switchable', context).slideToggle();
		});
	});
}

// use a checkbox to show/hide its parents next sibling div, focus on any child inputs there may be
$.fn.toggleDiv = function() {
	return this.each(function() {
		var $this = $(this);
		var sibling = $this.parent().next('.toggle_this');
		
		this.checked ? sibling.show() : sibling.hide();
		$this.change(function(){
			sibling.toggle(); 
			sibling.find('input, textarea, select').focus();
		});
	});
}

// converts an element (e.g. label) into a textfield when function is called, useful within a click or hover handler
$.fn.textFieldable = function(text_field_html, callback) {
	return this.each(function(){
		var $this 			= $(this),
				$text_field = $(text_field_html);

		$this.parent().html($text_field);
		$text_field.focus();
		
		// recall hinty
		$.bindPlugins();
		
		if (typeof callback == 'function') callback.call(this, $text_field);
	});
}

// oposite of textFieldable, but used exclusively when the original element is a label, used within a blur event handler
$.fn.fieldToLabel = function() {
	return this.each(function(){
			var $this = $(this),
					label = '<label for="'+ $this.attr('name') +'" class="block w110 small_round textFieldable">'+ $this.val() +'</label>';
			
			$this.parent().prepend(label);
			$this.remove();
	});
}

// hide element with a slide anim and remove from DOM
$.fn.slideUpAndRemove = function(speed) {
	if (typeof speed == 'null') speed = 300;
	
	return this.each(function(){
		var $this = $(this);
		$this.slideUp(speed, function(){ $this.remove(); });
	});
}

// animates from transparent to opaque on hover, css sets initial opacity
$.fn.animOpacity = function() {
	return this.each(function(){
		var $this				 = $(this),
				orig_opacity = $this.css('opacity');
				
		$this.hover(function(){
			$this.stop().animate({ 'opacity': 1 }, 300);
		}, function(){
			$this.stop().animate({ 'opacity': orig_opacity }, 150);
		});
	});
}

// attack a click event to divs that wrap a link to follow the href
$.fn.linkDiv = function() {
	return this.each(function(){
		var $this = $(this), href = $this.find('a').attr('href');
		$this.click(function(){ window.location = href; });
	});
}

// fill matching inputs with the param from its rel attr
$.fn.fillWithParam = function() {
	var params = window.location.href.split('?')[1];
	if (!params) return false;
	
	return this.each(function(){
		var $this = $(this),
				attr  = $this.attr('rel'),
				value = false;
		
		$.each(params.split('&'), function(){
			if (this.split('=')[0] == attr) { value = this.split('=')[1]; return; }
		});
		
		if (value) 
			$this.attr('value', decodeURIComponent(value.replace(/\+/g, '%20'))).removeClass('hint_text').attr('disabled', false);
		
		if ($this.hasClass('focus_me'))
			$this.focus();
	});
}

$.fn.appendParamAndGo = function() {
	return this.each(function(){
		var $this = $(this);
		
		$this.click(function(){
			var key   = $this.attr('rel').split('-')[0]
					val   = $this.attr('rel').split('-')[1],
					href	= window.location.href,
					new_href = '',
					has_param = href.indexOf('?') >= 0,
					param = (has_param ? '&' : '?') + key +'='+ val;
			if(!val) return false;
			
			// replace any preexisting param values if the key is present
			if (href.indexOf(key) >= 0) {
				new_href = href.split(key)[0].replace(/\&$/, '') + param;
			} else {
				new_href = href + param
			}
			
			// go if its a different button that was clicked
			if (href.indexOf(val) < 0)
				window.location = new_href;
		});
	});
}

// click a link to open a hidden div near by
$.fn.openDiv = function() {
	return this.each(function(){
		var $this = $(this),
				div_to_open = $this.attr('rel');
				
		$this.click(function() {
			$('#'+div_to_open).slideToggle();
			return false;
		});
	});
}

// make a link act as a submit button
$.fn.submitBtn = function() {
	return this.each(function() {
		var $this = $(this);
		
		$this.click(function(){
			$this.parents('form').submit();
			return false;
		})
	});
}

$.fn.accordion = function() {
	return this.each(function() {
		$(this).click(function() {
			var $this = $(this),
					info_div = $this.parent().next('.info');
					
			$('a', $this.parent().parent()).removeClass('active');
			$('.info').slideUp();
			
			if (info_div.is(':hidden')) {
				$this.addClass('active');
				info_div.slideDown().children().hide().fadeIn('slow');
			} else {
				$this.removeClass('active');
				info_div.slideUp();
			}
			
			return false;
		})
	});
}

$.fn.tabular_content = function() {
	return this.each(function(){
		var $this = $(this), // the container
				tabs = $('.tabular', $this), // ul
				panels = $('.tab_content', $this); // tab content divs
		
		panels.eq(0).show();
				
		$('a', tabs).click(function(){
			$('li', tabs).removeClass('active')
			clicked_tab = $(this);
			clicked_tab.parent().addClass('active');
			
			panels.hide().removeClass('active');
			$('#'+ clicked_tab.attr('rel'), $this).show().addClass('active');
			
			return false;
		});
	});
}

$.fn.clickOnLoad = function() {
	return this.each(function(){
		$(this).click();
	});
}

// first implemented for the client edit form. turns spans into inputs and submits the data via ajax
$.fn.instantForm = function() {
	return this.each(function(){
		var $this 		= $(this),
			hidden_form = $('form:hidden', this), // a hidden form we use for the authenticity token and to submit via ajax
			submit_btn 	= $('.instant_submit', this),
			client_id 	= hidden_form.attr('id').replace('client_edit_', ''),
			ajax_loader = $('.ajax_loader', $this),
			cancel_btn 	= $('<a href="#" id="cancel_btn">Cancel</a>').hide().appendTo($this);
		
		// serves as the edit mode button and submit button
		submit_btn.click(function(){
			if ($(this).text() == 'Edit') {
				cancel_btn.fadeIn();
				
				// turn elements with a class of value into an input. use it's rel attr and text for the field name, the rel attr is the relation name, e.g. mailing_address, billing_info. the text is the attr name
				$('.value', $this).each(function(){
					var $self 		= $(this).hide(),
						label_text 	= $self.prev('.label').text().replace(':', '').replace(' ', '_').toLowerCase(),
						field_name	= 'client'+ ($self.attr('rel') ? '['+ $self.attr('rel') +']' : '') +'[' + label_text +']', 
						input 		= $('<input type="text" class="small_text_field '+ label_text +'" name="'+ field_name +'" value="'+ $self.text() +'" />');

					input.prependTo($self.parent());
				});

				$(this).text('Save');
				$.bindPlugins(); // so that hinty and formbouncer will work.
				
			} else if ($(this).text() == 'Save') {
				ajax_loader.show();
				
				// put copies of the inputs into the form so we can serialize it and send the data
				$('input', $this).each(function(){ hidden_form.append($(this).clone()); });
				
				$.post(hidden_form.attr('action'), hidden_form.serialize(), function(response){
					if (response.success) {
						$('.value', $this).each(function(){
							var this_val   = $(this),
								this_input = $('input', this_val.parent()).hide();

							this_val.text(this_input.val()).fadeIn(1000);
						});
						
						submit_btn.text('Edit');
					} else alert(response.data);
					
					ajax_loader.hide();
					cancel_btn.fadeOut();
					
				}, 'json');
			}
			
			return false;
		});
		
		cancel_btn.click(function(){
			$('.small_text_field', $this).remove();
			$('.value', $this).show();
			$(this).fadeOut();
			submit_btn.text('Edit');
			return false;
		});
	});
}

/******************************************* SUCCESS CALLBACKS *******************************************/

$.toggleHelptext = function(clickedLink) {
	// if the link has a rel attribute, we are going to show the inner div of the container with class == rel
	$('.inner', '.' + clickedLink.attr('rel')).stop().slideToggle().toggleClass('hide');
	$('.ajax_action', clickedLink.parent()).toggleClass('hide');
	clickedLink.parent('.helptext_options').toggleClass('bg_green');
}

/******************************************* EVENT HANDLERS *******************************************/
// used to rebind the plugin to elements loaded into the DOM dynamically or through AJAX
$.bindPlugins = function() {
	$('.hintable').hinty(); // all matched inputs will display their title attribute
	$('form').formBouncer(); // form validation, fields with supported validation classes will be processed
}

// removed jQuery ready call since the scripts are at the bottom of the layout
//jQuery(function(){
	
	var $ = jQuery;
	$('body').addClass('js');
	$('.hide_if_js').hide();
	$('.flash').hide().slideDown();
	
	$.toggleAction(window.location.href, true); // toggle a container if its id is in the url hash
	
	try { // to load external plugins, ignore failure (if plugins weren't selected in site settings)
		$.bindPlugins(); // calls a few common plugins, also used after a new element that uses a plugin is created in the dom
	} catch (e){};
	
	$('.disabler', '.disabled').disabler();  // checkbox that disables all inputs in its form
	$('.anchorListener').anchorDispatch();   // toggle an element when its id is present in the url hash
	$('.row_checkable').rowCheckable();			 // clicking a whole form also enables its first checkbox
	$('.pane_switch').paneSwitcher();				 // use a checkbox to switch between two containers. classes: .pane_0, .pane_1
	$('.toggle_div').toggleDiv();						 // use a checkbox to show/hide its parents next sibling div
	$('.trans2opaq').animOpacity();					 // animates from transparent to opaque on hover, css sets initial opacity
	$('.link_div').linkDiv();								 // attack a click event to divs that wrap a link to follow the href
	$('.param_filled').fillWithParam(); 		 // fill matching inputs with the param from its rel attr
	$('.table_sort').appendParamAndGo();		 // append the key-val in the elements rel attr to the href and go to it
	$('.openDiv').openDiv();					 // click a link to open a hidden div near by
	$('.search-btn, .search-button').submitBtn();						 // make a link act as a submit button
	$('h4 a', '#info-accordion').accordion(); // my very own accordion widget :)
	$('.tabular_content').tabular_content(); // a div with a list as the tab nav and hidden divs below it as the tabbed content
	$('.clickerd').clickOnLoad();             // a click is triggered on page load for these elements
	$('.instant_form').instantForm();		// turn a tags with class name label and value into form labels and inputs
	
	// sortable nav bar, first implemented to update the position attr of a page (only when logged in)
	$('.sortable', '.authenticated').sortable({
		opacity: 0.3,
		update: function(e, ui) { $.updateModels(e, ui); }
	});
	
	$('.block_sortable', '.authenticated').sortable({
		opacity: 0.3,
		cursorAt: 'center',
		delay:500,
		grid: [50, 50],
		update: function(e, ui) {
			$.updateModels(e, ui);
		}
	});
	
	$('.mini_calendar').datepicker();
	$('.datepicker_wrap').click(function(){ $('.mini_calendar', this).focus(); });
	
	// front page
	$('a', '#click-more').click(function(){
		var $this = $(this);
		if ($this.text() == 'Click here for more') {
			$this.text('Click again to close');
		} else {
			$this.text('Click here for more')
		}
	});
	
	// listings show page
	// the google map breaks when it's loaded in a hidden div, then shown by js
	$('a[rel=sl-tabs-map]').click(function(){
		var map = $('#sl-tabs-map');
		// this is a function produced by the Gmap.html() method called from the template, it's provided by the google_map plugin
		// check the header area of the source html for the method definition
		if (!map.is(':hidden')) center_google_map();
	});
	
	// edit site settings page
	// turns a label into a textfield on mouseover, then uses callback to bind an event
	// to the new textfield to turn it back into a label when it blurs
	$('.textFieldable', '#SiteSettingFields .new_setting_field').live('mouseover', function(){
		var $this = $(this),
				settings_field_html = '<input name="new_site_settings[][key]" value="'+ $this.text() +'" class="hintable required" title="Enter a setting name" />';
		
		$(this).textFieldable(settings_field_html, function(text_field){
			$.revertSettingsTextFieldToLabel(text_field, $this.text());
		});
	});
	
	$('.textFieldable', '#SiteSettingFields .existing_setting_field').live('click', function(){
		var $this = $(this),
				existing_settings_html = '<input name="site_settings['+ $this.text() +']" value="'+ $this.text() +'" class="hintable required" title="Enter a setting name" />';
		
		$this.textFieldable(existing_settings_html, function(text_field){
			$.revertSettingsTextFieldToLabel(text_field, $this.text());
		});
		
		return false;
	});
	
	// admin menu hover behaviors
	var GR_content_menu_hover_interval,
			GR_resource_list = $('#resource_list');
	
	$('#content_menu_link').mouseover(function() {
		GR_resource_list.slideDown();
		return false;
	});
	
	$('#content_menu_link').click(function() {
		GR_resource_list.slideDown();
		return false;
	});
	
	$('#resource_list, #content_menu_link').mouseout(function(){
		GR_content_menu_hover_interval = setTimeout('GR_resource_list.slideUp()', 1000);
	});
	
	$('#resource_list, #content_menu_link').mouseover(function(){
		clearInterval(GR_content_menu_hover_interval);
	});
	
	$('li', '#resource_list').hover(function(){
		var li = $(this).css('position', 'relative');
		var link = $('a', li);
		
		if (link.hasClass('access_denied')) return;
		
		var new_option = $('<a class="admin_new_link admin_hover_option" href="'+ link.attr('href') +'/new">New</a>');
				new_option.appendTo(link)
									.hide().show()
									.click(function(){ window.location = this.href; return false; });
	}, function(){
		$('.admin_new_link', '#resource_list').fadeOut(300, function(){ $(this).remove(); });
	});
	// END admin menu
	
	// helpers
	$('.unique_checkbox').click(function() {
		var $this = $(this);
		$('input[type=checkbox]', $this.parent().parent().parent()).attr('checked', false);
		$this.attr('checked', !$this.is(':checked'))
	});
	
	$('.unique_checkbox').click(function() {
		var $this = $(this);
		$('input[type=checkbox]', $this.parent().parent().parent()).attr('checked', false);
		$this.attr('checked', !$this.is(':checked'))
	});
	
	// TODO: fix the toggle button, it doesn't turn off the editor, find out where the editor remove function is
	$('textarea.wysiwyg').each(function(i) {
		var textarea = jQuery(this),
				toggle = jQuery('<a href="#" class="toggle right" id="toggle_' + i + '">Toggle Editor</a>');
		
		textarea.parent().parent().prepend(toggle);
		
		toggle.click(function() {
			CKEDITOR.replace(textarea.attr('name'));
			return false;
		});
	});
	
	// toggle_links have a hash (#) of: #action_elementClass_contextClass 
	// e.g. #show_examples_helptext => $('.examples', '.helptext').show();
	$('.toggle_action').click(function() {
		$.toggleAction(this.href, false);
		return false;
	});
	
	// ajax links point to the ajax_controller, the href contains an action, and other key-values pairs such as model class,
	// model id, the attribute to update, and the value, see the ajax_controller for other actions and required params
	// use conditional logic to handle the success callback based on attributes of the clicked link, 
	// such as what element to update on success, or what part of the dom should change 
	$('.ajax_action').live('click', function(){
		var $this = $(this);
		$this.addClass('loading');
		
		if ($.mayContinue($this)) {
			$.getJSON(this.href + '&authenticity_token=' + $.get_auth_token(), {},
				function(response) {
					$this.removeClass('loading');
					
					if (response.success) {
						// need better conditional logic for these links
						if ($this.attr('rel') == 'helptext') {
							$.toggleHelptext($this);
							
						} else if ($this.hasClass('delete_link')) {
							$this.parent().parent().slideUp(300, function(){ $(this).remove(); });
						}
						
					} else {
						$.ajax_error(response);
						$this.removeClass('loading');
					}
				}
			);
		} else $this.removeClass('loading');
		
		return false;
	});
	
	// Partial addables, grab html from a div and add it to the form, used on forms and permissions create and edit
	$('.add_link', '.partial_addable').live('click', function(){
		var $this 			= $(this),
				context 		= '#' + $this.attr('rel'),
				partial_form = $($('.partial_form_html', context).html());
	
		$('input, select, checkbox', partial_form).each(function(){ $(this).attr('disabled', false); });
	
		partial_form.hide().prependTo('.partial_forms_wrap', context).slideDown(600);
		$.bindPlugins(); // first implemented to call hinty
		
		return false;
	});
	
	$('.cancel_link', '.partial_addable').live('click', function(){
		$(this).parent().parent().slideUp(300, function(){ $(this).remove(); }); 
		return false; 
	});
	
	// retrieves a partial via ajax and inserts it into the target div
	$('.insert_partial').live('click', function(){
		var $this = $(this);
		
		$.get(this.href, function(response){
			$('#' + $this.attr('rel')).html(response);
		})
		
		return false;
	});
	
	$('.inline_delete_link').live('click', function(){
		var $this = $(this);
		
		if ($.mayContinue($this)) {
			if (this.rel.split('_')[1] == '0') $this.parent().parent().slideUpAndRemove();
			else $('#'+ $this.attr('rel')).slideUpAndRemove();
		}
		
		return false;
	});
	
/******************************************* PAGE SPECIFIC BEHAVIOR *******************************************/
	
	// Views/Forms/Links Edit
	if ($.on_page([['edit, new', 'views, forms, links']])) {
		var scope_down = ''; 
		if ($.on_page([['edit, new', 'views']])) scope_down = 'owner';
		else scope_down = 'target';
		
		// when the user chooses a scope (aka resource), show the scope-dependent owner_id or target_id dropdown
		// which is populated by models of the selected scope class
		var scoping_fields = $('#scope_' + scope_down + '_fields', '#body');
		
		if ($('.scope_down_hidden', scoping_fields).val()) { // preselect owner or target from dropdown
			var scoper_id = $('.scope_down_hidden', scoping_fields).val();
			
			scoping_fields.children().each(function(){
				if (this.value == scoper_id) this.selected = 'selected';
			});
		} else scoping_fields.hide();
		
		// grab model instances that are of the selected class
		$('.scope_dropdown', '#scope_fields').change(function(){
			var $this = $(this);
			
			if ($this.val() != '') { // retrieve all models of this class
				scoping_fields.show(100);
				scoping_dropdown = $('.scoping_dropdown', scoping_fields);
				scoping_dropdown.html('<option>Loading ' + $this.val() + '...</option>');
				
				$.getJSON('/ajax/get_all', { model: $this.val(), authenticity_token: $.get_auth_token() },
					function(response) {
						if (response.success) {
							var args = { attribute: 'name', select_prompt: (scoping_dropdown.hasClass('no_prompt') ? '' : 'Active Context') }
							var option_tags = $.option_tags_from_model($this.val(), response.data, args);
							scoping_dropdown.html(option_tags);
							
						} else {
							scoping_dropdown.html('<option>Error Loading Records</option>')
						}
					}
				);
			} else scoping_fields.hide(300);
		}); // END .scope_dropdown.change()
		
		// get the attributes of the resource selected from #form_controller in the form new/edit page
		$('#form_controller', '#FormsForm').change(function(){
			fillInFormFieldSelectLists($(this).val()); 
		});
		
		// create a custom event on the select lists so that when they finish loading the options, we can select the
		// field's field_name that matches in the list
		$('.field_attr_name', '#form_builder').bind('filled', function(){
			$('.field_attr_name', '#form_builder').each(function(){
				var $this = $(this),
						name = $this.prev('span.field_name').text(); // we stored the field_name value in a hidden span
				
				$this.children('option').each(function(){
					var $this_option = $(this);
					if ($this_option.val() == name) $this_option.attr('selected', true);
				});
			});
			
			// this field name is useful for specifying a hidden field with a return path for after submit the form
			$(this).append('<option value="return_to">return_to</option>');
		});
		
		$('.delete_link', '#form_builder').live('click', function(){
			var $this = $(this),
					field_id = $(this).attr('rel').replace('field_', '');

			$this.parent().parent().html();
			return false;
		});
	} // END Edit/New Views/Forms/Links
	
	// Edit Forms
	if ($.on_page([['edit', 'forms']])) {
		// fill in the field name select lists
		var resource = $('#form_controller', '#FormsForm').val();
		fillInFormFieldSelectLists(resource);
		
	} // END Edit Forms
	
	// New Permissions
	if ($.on_page([['new', 'permissions, roles']])) {
		$('a.add_link', '.partial_addable').click();
	} // END New Permissions
	
//});

/**************** some utility functions ****************/

// fill up the field_name select tag in the forms new/edit page
function fillInFormFieldSelectLists(resource) {
	var $field_name_selects = $('.field_attr_name', '#form_builder');
			
	// show progress indicator in field name select lists
	$.injectOptionsInSelectLists($field_name_selects, '<option>Loading..</option>');
	
	// get the options and then inject them as option tags into all the select lists
	$.getModelAttributes(resource, function(attributes){
		$.injectOptionsInSelectLists($field_name_selects, $.option_tags_from_array(attributes));
		
		// in the form edit page, triggering this custom event invokes the function that selects the correct field name
		// in each of the fields field_name select list
		$field_name_selects.trigger('filled');
	});
}

/**************** adapter functions ****************/

// Ajaxful ratings uses Prototype's Ajax object, since we don't use Prototype, create it and wrap a jQuery function in it
var Ajax = function(){};
Ajax.Request = function(url, params) {
	$.post(url, params.parameters);
}