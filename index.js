$(document).ready(function () {

	// Open and close navigation
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

	// Count projects
	var pj_length = $(".project").length;
	$("#pj-total").html(pj_length);

	// change colour of buttons on hover
	$(".project-container .button").hover(function (e) {
			// over
			$(this).css("background-color", "#584346");
			$(this).css("border-color", "#584346")
			$(this).find(".button-link").css("color", "#E8CBCA");
		}, 
		function (e) {
			// out
			$(this).css("background-color", "#DF7C7D");
			$(this).css("border-color", "#DF7C7D");
			$(this).find(".button-link").css("color", "whitesmoke");
		}
	);

	$("#up").hover(function (e) {
		// over
		$(this).css("background-color", "#584346");
		$(this).css("border-color", "#584346")
		$(this).find(".button-link").css("color", "#E8CBCA");
	}, 
	function (e) {
		// out
		$(this).css("background-color", "#DF7C7D");
		$(this).css("border-color", "#DF7C7D");
		$(this).find(".button-link").css("color", "whitesmoke");
	}
);
});