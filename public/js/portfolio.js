let pictureWidth;

const resizePictureWidth = () => {
	const windowWidth = $(window).width();
	if (windowWidth < pictureWidth) {
		pictureWidth = windowWidth;
	} else {
		pictureWidth = 375;
	}

	$(".project-image").width(pictureWidth);
	$(".card").width(pictureWidth);

	$(".project-image").each(function () {
		const imgHeight = $(this).height();
		$(this).parents(".card").height(imgHeight);
	});
};

const resizeProjectContainer = () => {
	const windowWidth = $(window).width();
	const imagesPerRow = Math.floor(windowWidth / pictureWidth);
	$("#my-projects").width(imagesPerRow * pictureWidth);
};

$(window).resize(() => {
	resizePictureWidth();
	resizeProjectContainer();
});

$(document).ready(function () {
	// Materialize CSS JavaScript Initialization
	M.AutoInit();
	resizePictureWidth();
	resizeProjectContainer();
});

// Conditionally Render Dropdown
// if (
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//         navigator.userAgent
//     )
// ) {
//     // true for mobile device
//     $("#dropdown-container").css("display", "none");
// }

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
