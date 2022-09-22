window.addEventListener("scroll", function () {
    stickyHeader();
});

$("header").height($(".header-inner").height());

var header = document.getElementById("header");
var headerInner = document.getElementsByClassName("header-inner");

var sticky = header.offsetTop;
console.log(sticky);

const stickyHeader = () => {
    if (window.pageYOffset > sticky) {
        $(".header-inner").addClass("sticky");
    } else {
        $(".header-inner").removeClass("sticky");
    }
};


const menuToggle = document.querySelector('.menu-toggle');
const wrapper = document.querySelector('.wrapper');
const navigation = document.querySelector('.menu-area');
const collapse = document.querySelector('.collapse');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    collapse.classList.toggle('active');
    navigation.classList.toggle('active');
    wrapper.classList.toggle("menu--is-revealed")
}


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

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});

window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}