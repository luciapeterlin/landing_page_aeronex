document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper-hero", {
        slidesPerView: 1.15,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return ('0' + current).slice(-2) + '/' + ('0' + total).slice(-2);
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992 : {
                slidesPerView: 2.3,
                spaceBetween: 25,
            } 
        }
    });
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

