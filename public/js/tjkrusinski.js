'use strict';

var isMobile;

if (navigator.userAgent.match(/Android/i) ||
	navigator.userAgent.match(/webOS/i) ||
	navigator.userAgent.match(/iPhone/i) ||
	navigator.userAgent.match(/iPod/i) ||
	navigator.userAgent.match(/iPad/i) ||
	navigator.userAgent.match(/BlackBerry/)) {
		isMobile = true;
};

$(function(){
	
	var $clouds = $('.clouds');

	if (!isMobile) {
		$(window).on('scroll', function(){
			var s = $(this).scrollTop();
			if (s < 0) return;
			s = Math.floor(-s/.975);
			$clouds.css({
				'transform': 'translateY('+s+'px)'
			});
		});
	};
	
});
