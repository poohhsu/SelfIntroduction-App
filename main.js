
$(document).ready(function() {
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
	
	$('#member #menu .top .person_one').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jhuang').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .jhuang .back_button').click((event) =>{
		$('#member .jhuang').animate({opacity:0}, 500, () => {
			$('#member .jhuang').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .top .person_two').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jhou').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .jhou .back_button').click((event) =>{
		$('#member .jhou').animate({opacity:0}, 500, () => {
			$('#member .jhou').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .top .person_three').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jiang').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .jiang .back_button').click((event) =>{
		$('#member .jiang').animate({opacity:0}, 500, () => {
			$('#member .jiang').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .bottom .person_four').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .syu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .syu .back_button').click((event) =>{
		$('#member .syu').animate({opacity:0}, 500, () => {
			$('#member .syu').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .bottom .person_five').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .jheng').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .jheng .back_button').click((event) =>{
		$('#member .jheng').animate({opacity:0}, 500, () => {
			$('#member .jheng').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .bottom .person_six').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .he').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .he .back_button').click((event) =>{
		$('#member .he').animate({opacity:0}, 500, () => {
			$('#member .he').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member #menu .bottom .person_seven').click((event) =>{
		$('#member #menu').animate({opacity:0}, 500, () => {
			$('#member #menu').css('display', 'none');
			$('#member .liu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});

	$('#member .liu .back_button').click((event) =>{
		$('#member .liu').animate({opacity:0}, 500, () => {
			$('#member .liu').css('display', 'none');
			$('#member #menu').css({
				"opacity":"0",
				"display":"flex",
			}).animate({opacity:1}, 500);
		});
	});
});