/**
* jQuery Search
*
* @fileoverview Converts an input into a search field that can run off a normal form submit or AJAX load.
* @link https://github.com/th3uiguy/jquery-search
* @author Spencer Neese
* @version 1.5.1
* @requires jQuery UI 1.7+ and jQuery 1.3.2+
* @license jQuery Search Plugin
*
* Copyright 2012, Spencer Neese
* Dual licensed under the MIT or GPL Version 2 licenses.
* <https://raw.github.com/th3uiguy/jquery-search/master/GPL-LICENSE.txt> <https://raw.github.com/th3uiguy/jquery-search/master/MIT-LICENSE.txt>
*/

;(function($) {
$.widget( "ui.search", {

	options: {
		placeholder: "Keyword Search",
		submitButton: "input[type=submit],button[type=submit]",
		autoSubmit: false,
		delay: 300,
		onClear: null,
		onSubmit: null
	},

	_create: function(){
		var opts = this.options;
		var self = this;
		var $self = $(this.element);
		var $phrase, $container;

		if($self.is('input')){
			$phrase = $self.addClass('ks-phrase ks-blank');
			$container = $('<div class="ks-container ui-state-default ui-corner-all" />').insertBefore($phrase).append($phrase);
		}
		else{
			$container = $self.addClass('ks-container ui-state-default ui-corner-all');
			$phrase = $container.find('input[type=text]').addClass('ks-phrase ks-blank');
		}
		var $submit = $container.find(opts.submitButton).button().addClass('ks-submit');
		opts.autoSubmit = ($submit.size() === 0);
		var $clearBtn = $('<span class="ui-icon ui-icon-circle-close ks-clear"></span>').appendTo($container).click(function(){
			$phrase.trigger('ksclear');
		});
		
		$container.bind({
			"mouseenter": function(){ $(this).addClass('ui-state-hover ks-hover'); },
			"mouseleave": function(){ $(this).removeClass('ui-state-hover ks-hover'); },
			"click": function(){ $phrase.focus(); }
		});
			
		$phrase.bind({
			"ksclear": function(){
				$phrase.val('');
				$(this).trigger('keyup.kskeyup');
				if(typeof opts.onClear === "function") opts.onClear($phrase[0]);
			},
			"keyup.kskeyup": function(){
				self._onKeyUp(this, $clearBtn, opts);
				if(opts.autoSubmit === true){
					clearTimeout($phrase.data('ksTimer'));
					var timer = setTimeout(function(){ $phrase.trigger('kssubmit'); }, opts.delay);
					$phrase.data('ksTimer', timer);
				}
			},
			"kssubmit": function(){
				if(typeof opts.onSubmit === "function") opts.onSubmit(this);
			},
			"focus": function(){
				if($(this).data('blank') == true){
					$(this).data('blank', false).val('').removeClass('ks-blank');
				}
				$container.addClass('ks-active');
			},
			"blur": function(){
				if(self._phraseIsBlank(this, opts)){
					$phrase.data('blank', true).addClass('ks-blank').val(opts.placeholder);
				}
				self._onKeyUp(this, $clearBtn, opts);
				$container.removeClass('ks-active');
			}
		});
		$phrase.blur();

		$($phrase.get(0).form).bind('submit.kssubmit', function(){
			$phrase.trigger('kssubmit');
		});
	},
	destroy: function(){
		$.Widget.prototype.destroy.call( this );
	},
	_onKeyUp: function(phraseInput, $clearBtn, opts){
		if(this._phraseIsBlank(phraseInput, opts)) $clearBtn.hide();
		else $clearBtn.show();
	},
	_phraseIsBlank: function(phraseInput, opts){
		return ($(phraseInput).val().length == 0 || $(phraseInput).val() == opts.placeholder);
	}

});
})(jQuery);
