$(document).ready(function () {
	const nav = $("nav.navigation");
	const open = $(".menu-toggle.open");
	const close = $(".menu-toggle.close");

	$(open).click(function (e) { 
		e.preventDefault();
		$(nav).slideDown("slow");
	});

	$(close).click(function (e) { 
		e.preventDefault();
		$(nav).slideUp("slow");
	});
});