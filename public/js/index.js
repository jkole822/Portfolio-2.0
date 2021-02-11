$(document).ready(function () {
	M.AutoInit();

	// Card Flip Sizing
	$(".project-image").each(function (index) {
		const width = $(this).width();
		const height = $(this).height();

		$(this).parents(".card").width(width).height(height);
	});

	// Isotope
	$(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "packery",
	});
});
