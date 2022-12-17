$(document).ready(function () {

	$(".menu-toggle").click(function (e) { 
		e.preventDefault();
		$(".menu-toggle #close").delay("slow").fadeIn();
		$(".menu-toggle #open").delay("slow").fadeOut();
	});
	
});