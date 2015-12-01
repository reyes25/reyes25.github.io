$(document).ready(function() {
	
	var height = $(window).height();
	console.log('height:', height);
	$('#left, #right, #center').css('height', height - 40); 
	$('#view2').css('height', height);

	$('#nav-beverages').click(function() {
		$('html,body').animate({
    		scrollTop: $('#view2').offset().top
    	}, 500);
	});

});