$(document).ready(function() {
	var menu = $('div#floating-menu');
	var offset = menu.offset().top;

	var position = 150;
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
		var position = target.offset().top - 20;
		$('body,html').animate({scrollTop: position}, speed, 'swing');
		return false;
	});
});

$(function() {
	var navlist = new Array('#nav-naiyo', '#nav-haikei', '#nav-group', '#nav-mokuteki', '#nav-iti', '#nav-mirai', '#nav-houhou', '#nav-a', '#nav-b', '#nav-c', 'n#av-d', 'n#av-matome');
	var midashilist = new Array('#kenkyunaiyo', '#haikei', '#group', '#mokuteki', '#itiduke', '#mirai', '#kenkyuhou', '#akadai', '#bkadai', '#ckadai', '#dkadai', '#matome');
	$(window).scroll(function() {
		for (var i = 0; i < navlist.length; i++) {
			if ($(window).scrollTop() >= $(midashilist[i]).offset().top - 100 && $(midashilist[i + 1]).offset().top - 100 >= $(window).scrollTop()) {
				for (var j = 0; j < navlist.length; j++) {
					noselectOpacity(navlist[j]);
				}
				selectOpacity(navlist[i]);
			}
		}
	});
});

function selectOpacity(element) {
	$(element).removeClass('noselect');
	$(element).addClass('select');
}

function noselectOpacity(element) {
//	$(element).fadeOut(500, function() {
//		$(element).removeClass('select');
//	});
	$(element).removeClass('select');
	$(element).addClass('noselect');
}
