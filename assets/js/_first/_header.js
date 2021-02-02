// Burger menu //
$(document).ready(function () {
	$('#menuButton').click(function () {
		$(this).toggleClass('is-active');
		$("#navMenu").toggleClass('active');
	});

	$('#navMenu').click(function () {
		$("#menuButton").toggleClass('is-active');
		$(this).toggleClass('active');
	});
});