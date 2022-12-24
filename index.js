$(document).ready(function () {

	const nav = $("nav.navigation");
	const open = $(".menu-toggle.open");
	const close = $(".menu-toggle.close");

	// open navigation
	$(open).click(function (e) { 
		e.preventDefault();
		$(nav).slideDown("slow");
	});

	// close navigation
	$(close).click(function (e) { 
		e.preventDefault();
		$(nav).slideUp("slow");
	});

	// Count projects
	var pj_length = $(".project").length;
	$("#pj-total").html(pj_length);

});