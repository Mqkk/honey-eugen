import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',

  scrollbar: {
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-btn--next',
    prevEl: '.swiper-btn--prev',
  },
});
