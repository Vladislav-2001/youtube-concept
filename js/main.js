const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {slidesPerView: 6},
    1600: {slidesPerView: 5},
    1300: {slidesPerView: 4},
    1100: {slidesPerView: 3},
    800: {slidesPerView: 2}
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiperRecommended = new Swiper('.recomended-video', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
    breakpoints: {
    1700: {slidesPerView: 3},
    1100: {slidesPerView: 2}
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recomended-button-next',
    prevEl: '.recomended-button-prev',
  },
});

const swiper2 = new Swiper('.recommended-channel', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {slidesPerView: 6},
    1600: {slidesPerView: 5},
    1300: {slidesPerView: 4},
    1100: {slidesPerView: 3},
    800: {slidesPerView: 2}
  },
  // Navigation arrows
  navigation: {
    nextEl: '.ch-recomended-button-next',
    prevEl: '.ch-recomended-button-prev',
  },
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640){
  swiper.destroy();
  swiperRecommended.destroy();  
swiper2.destroy();
};