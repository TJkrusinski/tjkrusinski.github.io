'use strict';

var isMobile;

if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i)) isMobile = true;

$(function(){
	
	var $clouds = $('.clouds');

	if (!isMobile) {
		$('.content-holder').on('scroll', function(){
			var s = $(this).scrollTop();
			if (s < 0) return;
			s = Math.floor(s*.9);
			$clouds.css({
				'transform': 'translateY('+s+'px)'
			});

		});

		$('.clouds').show();
	};
	
});
