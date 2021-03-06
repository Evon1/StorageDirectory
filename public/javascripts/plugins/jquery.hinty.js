/**
 * Custom jQuery 1.3.2 Plugin
 * Hinty by Diego Salazar, oct. 2009
 * diego at greyrobot dot com
 */
// applies a text hint to the field by using the title attribute
jQuery.fn.hinty = function() {
	return this.each(function(){
		var $this = jQuery(this);
		var title = this.title;

		if (!$this.val() || $this.val() == '' || $this.val() == title) {
			$this.addClass('hint_text');
			$this.val(title);
		}

		// set the caret position to 0, making it appear that the hint text is non selectable
		$this.focus(setCaretPos).click(setCaretPos);
		function setCaretPos(){
			if (this.value == title){
				if (this.setSelectionRange) {
					this.focus();
					// FF throws an exception when calling setSelectionRange on a field that is not visible or any of its parents are not visible
					if ($this.parent().is(':visible') && $this.is(':visible')) {
						this.setSelectionRange(0, 0);
					}
				} else if (this.createTextRange) {
					var range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', 0);
					range.moveStart('character', 0);
					range.select();
				}
			}
		}

		// get rid of hint text when a key is pressed on the input
		$this.keydown(function(){
			if ($this.val() == title) {
				$this.removeClass('hint_text');
				$this.val('');
			}
		});

		// put the hint text back if the input is blank
		$this.blur(function(){
			if ($this.val() == '') {
				$this.addClass('hint_text');
				$this.val(title);
			}
		});
	});
}
