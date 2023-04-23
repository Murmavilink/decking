const slider = (selector) => {
	const swiperCarusel = new Swiper(selector, {
		loop: true,
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

          centeredSlides: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },

	});
};



const burgerMenu = () => {
  const burgerBtn = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-menu--active');
    menu.classList.toggle('menu--active');
  });
};




slider('.products__carusel');
slider('.work__carusel');
burgerMenu();