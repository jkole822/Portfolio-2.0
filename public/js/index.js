$(document).ready(function () {
	M.AutoInit();

	// Card Flip Sizing
	$(".project-image").each(function () {
		const width = $(this).width();
		const height = $(this).height();

		$(this).parents(".card").width(width).height(height);
	});

	// Isotope
	const $grid = $(".grid").isotope({
		itemSelector: ".grid-item",
		layoutMode: "packery",
	});

	// Isotope Filters
	$("select").change(function () {
		const tech = $(this).val();
		if (tech === "*") {
			$grid.isotope({ filter: tech });
		} else {
			$grid.isotope({ filter: `[data-tech*="${tech}"]` });
		}
	});

	// LocomotiveScroll
	const scroller = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
		smartphone: { smooth: true },
		tablet: { smooth: true },
	});

	const resizeProjectContainer = () => {
		const windowWidth = $(window).width();
		const imagesPerRow = Math.floor(windowWidth / 375);
		$("#my-projects").width(imagesPerRow * 375);
	};

	resizeProjectContainer();

	$(window).resize(() => {
		resizeProjectContainer();
	});
});
