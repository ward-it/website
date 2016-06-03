$('document').ready(function(){

	var headerImageCount = 1;
	resizeTopSquares();

	$(window).resize(function(){
		resizeTopSquares();
	})

	function resizeTopSquares(){
		var wdtTop = $('.wardit_top_squares_container').width();
		var hgtTop = 0.57 * wdtTop;
		var wdtAU = $('.wardit_header_square_3').width();
		$('#wardit_header_about_us').css('font-size',''+(wdtAU * 0.2)+'px');
		$('.wardit_top_squares_container').height(hgtTop);
		$('.wit_header_slide_square_container').each(function(){
			var wdt = $(this).width();
			$(this).height(wdt);
		})
	}

	function switchHeaderImages(){

	}
})
