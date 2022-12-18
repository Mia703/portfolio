$(document).ready(function () {

	// don't show the navigation
	$("nav.navigation").hide();

	// open navigation
	$('.menu-toggle #open').click(function (e) { 
		e.preventDefault();

		$("nav.navigation").slideDown("slow");
	});

	// how do I close the navigation?
	

	// count number of projects
	var total_projects = $(".project").length;
	$("#pj-total").html(total_projects);
	
});