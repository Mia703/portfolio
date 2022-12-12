$(document).ready(function () {

	// open mobile menu
	$(".menu-toggle.open").click(function (e) { 
		e.preventDefault();

		$("#overlay").show(
			'slide', {direction: 'right'},
			'slow'
		);

		$("#mobile.navigation").show(
			'slide', {direction: 'right'}, 
			'slow'
		);
	});

	// close mobile menu
	$(".menu-toggle.close").click(function (e) { 
		e.preventDefault();

		$("#overlay").hide(
			'slide', {direction: 'right'},
			'slow'
		);

		$("#mobile.navigation").hide(
			'slide', {direction: 'right'}, 
			'slow'
		);
	});

	// after click of nav item, close menu --> how do I do that?
	// $(".nav-list.mobile .nav-link").click(function (e) { 
	// 	e.preventDefault();
	// 	$("#overlay").delay(1000).hide(
	// 		'slide', {direction: 'right'},
	// 		'slow'
	// 	);

	// 	$("#mobile.navigation").delay(1000).hide(
	// 		'slide', {direction: 'right'}, 
	// 		'slow'
	// 	);
	// });
});