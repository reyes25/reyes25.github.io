$(document).ready(function() {

	$('.nav li span').hover(function() {
		$(this).addClass('nav-li-hover');
	}, function() {
		$(this).removeClass('nav-li-hover');
	});
	
	var height = $(window).height();
		width = $(window).width();

	$('#left, #right, #center').css('height', height - 80); 
	$('#view2').css('height', height);

	$('#nav-beverages').click(function() {
		$('html,body').animate({
    		scrollTop: $('#view2').offset().top
    	}, 500);
	});

	$('#modal').css({
		top: height/2 - 200,
		left:width/2 - 300
	});


	$('#modal-overlay').fadeIn(500, function() {
		$('#modal').slideDown(500, function() {

		});
	});

	$('button').on('click', function(event) {
		$('#modal-overlay').fadeOut();
	});

});