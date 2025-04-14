$(document).ready(function () {
/***** Logo *****/
$("#logo").animate({ opacity: 1 }, 10);
setTimeout(function () {
	$(".step-1").animate({ opacity: 0 }, 200);
	$("#logo .step-2").animate({ opacity: 1 }, 200, function () {
		setTimeout(function () {
			$("#logo .step-2 .logo-image-2").animate({ left: -60 }, 700);
			$("#logo .step-2 .logo-image-3").animate({ left: -98 }, 700, function () {
				setInterval(function () {
					$("#logo .step-2 .logo-image-3").fadeOut(600).delay(600).fadeIn(600).delay(600).fadeOut(600);
				});
			});
			$('html').css('overflow', 'visible');
			$('.content-wrapper, .site-nav, .site-footer').css('opacity', '1');
		}, 10);
	});
}, 1000);


/***** Transitional Effects *****/
setTimeout(function () {
	$("body a, body input[type='submit'], button").addClass("loaded");
}, 500);

});