
$(document).ready(function () {
	var current;

	$('.photos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		focusOnSelect: true,
		centerPadding: '7%',
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

	$('#member .jhuang').css('display', 'none');
	$('#member .jhou').css('display', 'none');
	$('#member .jiang').css('display', 'none');
	$('#member .syu').css('display', 'none');
	$('#member .jheng').css('display', 'none');
	$('#member .he').css('display', 'none');
	$('#member .liu').css('display', 'none');

	$('.member5').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .jhuang').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .jhuang').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.jhuang';
		}, 1000);
	});

	$('#member #menu .top .person_one').click((event) => {
		$('.photos').slick('slickGoTo', 4);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jhuang').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.jhuang';
	});

	$('.member3').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .jhou').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .jhou').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.jhou';
		}, 1000);
	});

	$('#member #menu .top .person_two').click((event) => {
		$('.photos').slick('slickGoTo', 2);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jhou').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.jhou';
	});

	$('.member4').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .jiang').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .jiang').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.jiang';
		}, 1000);
	});

	$('#member #menu .top .person_three').click((event) => {
		$('.photos').slick('slickGoTo', 3);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jiang').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.jiang';
	});

	$('.member6').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .syu').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .syu').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.syu';
		}, 1000);
	});

	$('#member #menu .bottom .person_four').click((event) => {
		$('.photos').slick('slickGoTo', 5);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .syu').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.syu';
	});

	$('.member2').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .jheng').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .jheng').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.jheng';
		}, 1000);
	});

	$('#member #menu .bottom .person_five').click((event) => {
		$('.photos').slick('slickGoTo', 1);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jheng').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.jheng';
	});

	$('.member7').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .he').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .he').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.he';
		}, 1000);
	});

	$('#member #menu .bottom .person_six').click((event) => {
		$('.photos').slick('slickGoTo', 6);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .he').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.he';
	});

	$('.member1').click((event) => {
		if ($('#member #menu').css('display') == 'none')
			$('#member ' + current).animate({ opacity: 0 }, 500, () => {
				$('#member ' + current).css('display', 'none');
				$('#member .liu').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		else
			$('#member #menu').animate({ opacity: 0 }, 500, () => {
				$('#member #menu').css('display', 'none');
				$('#member .liu').css({
					"opacity": "0",
					"display": "flex",
				}).animate({ opacity: 1 }, 500);
			});
		setTimeout(function () {
			current = '.liu';
		}, 1000);
	});

	$('#member #menu .bottom .person_seven').click((event) => {
		$('.photos').slick('slickGoTo', 0);
		$('#member #menu').animate({ opacity: 0 }, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .liu').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
		current = '.liu';
	});

	$('#member .back_button').click((event) => {
		$('#member ' + current).animate({ opacity: 0 }, 500, () => {
			$('#member ' + current).css('display', 'none');
			$('#member #menu').css({
				"opacity": "0",
				"display": "flex",
			}).animate({ opacity: 1 }, 500);
		});
	});
});
