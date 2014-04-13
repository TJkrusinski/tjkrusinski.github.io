'use strict';

$(function(){
	var isMobile;
	var $clouds = $('.clouds');

	if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i))
		isMobile = true;

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
