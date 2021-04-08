const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiperRecommended = new Swiper('.recomended-video', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: '.recomended-button-next',
    prevEl: '.recomended-button-prev',
  },
});

const swiperChRecommended = new Swiper('.recomended-channel', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.ch-recomended-button-next',
    prevEl: '.ch-recomended-button-prev',
  },
});