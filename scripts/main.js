$(document).ready(function() {
	
	var height = $(window).height();
	$('#left, #right, #center, #view2').css('height', height);

	$('#nav-beverages').click(function() {
		$('html,body').animate({
    		scrollTop: $('#view2').offset().top
    	}, 500);
	});

});