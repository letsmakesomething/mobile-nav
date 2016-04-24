var mobileNav = (function(){
	'use strict';

	var $window = $(window),
		$body = $('body'),
		$header = $('.header'),
		$nav = $('.nav'),
		$toggle = $('.menu-bar__toggle'),
		menuOpen = false;

	var bind = function(){
		$toggle.click(function(){
			if (menuOpen) {
				menuOpen = false;
				$toggle.text('Menu');
				$body.removeClass('body--menu-open');
				$nav.animate({
					'height' : '0px'
				});
			} else {
				var height = $window.innerHeight() - $header.height();
				menuOpen = true;
				$toggle.text('Close');
				$nav.scrollTop(0);
				$nav.animate({
					'height' : height+'px'
				},{
					'duration' : 250,
					'complete' : callback
				});
			}
		});
	};

	var callback = function() {
		$body.addClass('body--menu-open');
	};

	var init = function(){
		bind();
	};

	init();

	return null

}());