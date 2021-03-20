// Mobile Settings
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	// true for mobile device
	$(".mobile-center").css("justify-content", "center");
	$(".header").css("margin-left", "0").css("margin-right", "0");
	$("#my-name").removeClass("small-space").addClass("big-space");
	$("#my-role").css("font-size", "1.25rem");
}

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

$(document).ready(() => {
	if (isSafari)
		M.toast({ html: "Try an alternative browser for optimal viewing" });
});

// LocomotiveScroll
const scroller = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
});
