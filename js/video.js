$(document).ready(function () {

    // enter video full screen on video click
	$('.video-overlay-vimeo').click(function () {
		var vimeo = $(this).closest('.video-module').attr('data-vimeo');
		var src = 'https://player.vimeo.com/video/' + vimeo + '?autoplay=1&color=ffffff&title=0&byline=0&portrait=0';
		var iframe = $(this).closest('.video-module').find('.video-modal-iframe');
		iframe.attr('src', src);
		if ($(window).width() < 768) {
			if ($(this).hasClass('active')) {
				$(this).closest('.video-module').find('.video-modal').fadeIn();
				$(this).removeClass('active').css('opacity', '0');
			} else {
				$('.video-overlay').removeClass('active').css('opacity', '0');
				$(this).addClass('active').css('opacity', '1');
			}
		} else {
			$(this).closest('.video-module').find('.video-modal').fadeIn();
		}
		iframe.css('opacity', '1');
		$('html').css('overflow', 'hidden');
		$('body').css('overflow', 'scroll');
	});
	$('.video-modal-close').click(function () {
		// $(this).closest('.video-module').find('.video-overlay').removeClass('active').css('opacity', '0');
		$(this).closest('.video-modal').fadeOut();
		$(this).closest('.video-modal').find('.video-modal-iframe').attr('src', '');
		$('html').css('overflow', 'visible');
		$('body').css('overflow', 'visible');
	});


    // YouTube Variation
	$('.video-overlay-youtube').click(function () {
		var youtube = $(this).closest('.video-module').attr('data-youtube');
		var src = 'https://www.youtube.com/embed/' + youtube;
		var iframe = $(this).closest('.video-module').find('.video-modal-iframe');
		iframe.attr('src', src);
		if ($(window).width() < 768) {
			if ($(this).hasClass('active')) {
				$(this).closest('.video-module').find('.video-modal').fadeIn();
				$(this).removeClass('active').css('opacity', '0');
			} else {
				$('.video-overlay').removeClass('active').css('opacity', '0');
				$(this).addClass('active').css('opacity', '1');
			}
		} else {
			$(this).closest('.video-module').find('.video-modal').fadeIn();
		}
		iframe.css('opacity', '1');
		$('html').css('overflow', 'hidden');
		$('body').css('overflow', 'scroll');
	});

});