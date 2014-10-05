$(document).ready(function() {
	//menuの処理
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

//Topへボタンの処理
	$("#back-top").hide();

	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 1000) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});
		$('#back-top a').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			selectOpacity(0);
			return false;
		});
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
	var navlist = new Array('#nav-naiyo', '#nav-haikei', '#nav-group', '#nav-mokuteki', '#nav-iti', '#nav-mirai', '#nav-houhou', '#nav-a', '#nav-b', '#nav-c', '#nav-d', '#nav-matome');
	var midashilist = new Array('#kenkyunaiyo', '#haikei', '#group', '#mokuteki', '#itiduke', '#mirai', '#kenkyuhou', '#akadai', '#bkadai', '#ckadai', '#dkadai', '#matome');
	$(window).scroll(function(result) {
		for (var i = 0; i < navlist.length; i++) {
			if ($(window).scrollTop() >= $(midashilist[i]).offset().top - 100 && $(midashilist[i + 1]).offset().top - 100 >= $(window).scrollTop()) {
				for (var j = 0; j < navlist.length; j++) {
					noselectOpacity(navlist[j]);
				}
				selectOpacity(navlist[i]);
			}
		}

		var $window = $(result.currentTarget);
		height = $window.height();
		scrollTop = $window.scrollTop();
		documentHeight = $(document).height();
		//一番下の処理
		if (documentHeight === height + scrollTop) {
			selectOpacity(navlist[navlist.length-1]);
			noselectOpacity(navlist[navlist.length-2]);
		}
	});
});

function selectOpacity(element) {
	$(element).removeClass('noselect');
	$(element).addClass('select');
}

function noselectOpacity(element) {
	$(element).removeClass('select');
	$(element).addClass('noselect');
}
