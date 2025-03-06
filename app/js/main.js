$(function () {


var mixer = mixitup('.assortment__gallery');

const swiper = new Swiper('.swiper', {
  loop: false,

  pagination: {
    el: '.swiper-pagin',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-btn--prev',
    prevEl: '.swiper-btn--next',
  },
});
});


