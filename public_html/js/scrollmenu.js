$(document).ready(function() {
	var menu = $('div#floating-menu');
	var offset = menu.offset().top;

	var position = 100;
	var coodinates = menu.css('top');
	var origPos = menu.css('position');

	$(window).scroll(function() {
		var scrollAmount = $(window).scrollTop();
		var newPosition = offset + scrollAmount;

		if (scrollAmount > offset - position) {
			menu.css('position', 'fixed');
			menu.css('top', position + "px");
		} else {
			menu.css('position', origPos);
			menu.css('top', coodinates);
		}
	});
});

$(function() {
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href = $(this).attr("href");
		var target = href === "#" ? $('html') : $(href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position},speed,'swing');
		return false;
	});
});