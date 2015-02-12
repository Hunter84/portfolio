$(document).ready(function() {

	$(document).ready(function() {
		$('img').css('opacity', '1')
	});

	$('#menu li').mouseenter(function() {
        $(this).css('opacity', '1');
    });

    $('#menu li').mouseleave(function() {
    	$(this).css('opacity', '0.6')
    });

    $("#home-button").click(function(){
		$('#menu li').css('background-color', $('#menu').css('background-color')).removeClass('selected');
    	$(this).css('background-color','#F2C968').addClass('selected');

    	$('body').css('background-color','#F2C968');
	    $("#projects").slideUp("slow");
	    $("#download").slideUp("slow");
	    $("#home").delay(600).slideDown(600);
	});
    $("#projects-button").click(function(){
		$('#menu li').css('background-color', $('#menu').css('background-color')).removeClass('selected');
    	$(this).css('background-color','#F2B468').addClass('selected');

    	$('body').css('background-color','#F2B468');
	    $("#home").slideUp("slow");
	    $("#download").slideUp("slow");
	    $("#projects").delay(600).slideDown(600);
	});
});