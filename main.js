
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
		$('#member .jhuang').css('display', 'block');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'none');
		$('#member .jhuang .back_button').click((event) =>{
			$('#member .jhuang').css('display', 'none');
		})
	})
	
	$('#member #menu .top .person_two').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'block');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'none');
		$('#member .jhou .back_button').click((event) =>{
			$('#member .jhou').css('display', 'none');
		})
	})
	
	$('#member #menu .top .person_three').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'block');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'none');
		$('#member .jiang .back_button').click((event) =>{
			$('#member .jiang').css('display', 'none');
		})
	})
	
	$('#member #menu .bottom .person_four').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'block');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'none');
		$('#member .syu .back_button').click((event) =>{
			$('#member .syu').css('display', 'none');
		})
	})
	
	$('#member #menu .bottom .person_five').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'block');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'none');
		$('#member .jheng .back_button').click((event) =>{
			$('#member .jheng').css('display', 'none');
		})
	})
	
	$('#member #menu .bottom .person_six').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'block');
		$('#member .liu').css('display', 'none');
		$('#member .he .back_button').click((event) =>{
			$('#member .he').css('display', 'none');
		})
	})
	
	$('#member #menu .bottom .person_seven').click((event) =>{
		$('#member .jhuang').css('display', 'none');
		$('#member .jhou').css('display', 'none');
		$('#member .jiang').css('display', 'none');
		$('#member .syu').css('display', 'none');
		$('#member .jheng').css('display', 'none');
		$('#member .he').css('display', 'none');
		$('#member .liu').css('display', 'block');
		$('#member .liu .back_button').click((event) =>{
			$('#member .liu').css('display', 'none');
		})
	})
	
	
})
