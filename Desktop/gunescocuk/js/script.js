/* window.addEventListener("scroll", function () {
	stickyHeader();
});
 */
/* $("header").height($(".header-inner").height());
 */
/* var header = document.getElementById("header");
var headerInner = document.getElementsByClassName("header-inner");

var sticky = header.offsetTop;
console.log(sticky);

const stickyHeader = () => {
	if (window.pageYOffset > sticky) {
		$(".header-inner").addClass("sticky");
	} else {
		$(".header-inner").removeClass("sticky");
	}
}; */

const header = document.querySelector("#header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    };
});

const menuToggle = document.querySelector(".menu-toggle");
const wrapper = document.querySelector(".wrapper");
const navigation = document.querySelector(".menu-area");
const collapse = document.querySelector(".collapse");
menuToggle.onclick = function () {
	menuToggle.classList.toggle("active");
	collapse.classList.toggle("active");
	navigation.classList.toggle("active");
	wrapper.classList.toggle("menu--is-revealed");
};

var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	effect: "fade",
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

var swiper = new Swiper(".mySwiperServices", {
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

var swiper = new Swiper(".mySwiperBlog", {
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

//Galery
var swiperGalery = new Swiper(".mySwiperGalery", {
	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

document.addEventListener("DOMContentLoaded", function () {
	// make it as accordion for smaller screens
	if (window.innerWidth < 992) {
		// close all inner dropdowns when parent is closed
		document.querySelectorAll(".navbar .dropdown").forEach(function (everydropdown) {
			everydropdown.addEventListener("hidden.bs.dropdown", function () {
				// after dropdown is hidden, then find all submenus
				this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
					// hide every submenu as well
					everysubmenu.style.display = "none";
				});
			});
		});

		document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
			element.addEventListener("click", function (e) {
				let nextEl = this.nextElementSibling;
				if (nextEl && nextEl.classList.contains("submenu")) {
					// prevent opening link if link needs to open dropdown
					e.preventDefault();
					if (nextEl.style.display == "block") {
						nextEl.style.display = "none";
					} else {
						nextEl.style.display = "block";
					}
				}
			});
		});
	}
	// end if innerWidth
});
// DOMContentLoaded  end

$(".submenu")
	.parent()
	.hover(function () {
		console.log("test");
		var menu = $(this).find("ul");
		var menupos = $(menu).offset();

		if (menupos.left + menu.width() > $(window).width()) {
			var newpos = -$(menu).width();
			menu.css({ left: newpos });
		}
	});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
	buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
	loop: false,
	protect: true,
});

window.onscroll = () => {
	toggleTopButton();
};
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTopButton() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("back-to-up").classList.remove("d-none");
	} else {
		document.getElementById("back-to-up").classList.add("d-none");
	}
}
