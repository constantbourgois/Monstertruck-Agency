/*jslint devel: true, sloppy: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
	

	//********* MENU PROJECT HOVER ******* //
	
	//** REMOVES HOVER AND CLICK WHEN PROJECT MENU IS HIDDEN**/

						
	$('#hovera').mouseenter(function () {

		$('.projectmenu').addClass('menuopen');

	});

	$('.projectmenu').mouseleave(function () {
		console.log("leave");

		$('.projectmenu').removeClass('menuopen');

	});

	$(document).mousemove(function (event) {
		
		var coordaleft = $('#hovera').offset().left;
		var coordaright = $('#hovera').offset().left + $('#hovera').outerWidth();


		if ((event.pageX < coordaleft) || (event.pageX > coordaright)) {

			$('.projectmenu').removeClass('menuopen');


		}


	});
	
	$('.projectmenu a').click(function(){
		
		$('.projectmenu').removeClass('menuopen');
	});
	
	$('.accordion').click(function(){
		$('.accordiontarget').toggleClass('accordionopen');
		$('.accordionmove').toggleClass('move');
	});
	
	
	$('#button').click(function(){
		
		
		$('#main').toggleClass('animatemain');
	
		 
	 });
    
     $('.accordion').click(function(){
		
		
		$('#main').toggleClass('movebottom');	
	
		 
	 });
	
	

});