$(document).ready(function () {
	M.AutoInit();

	$(".grid").isotope({
		// options

		itemSelector: ".grid-item",
		layoutMode: "packery",
	});
});
