document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 18,
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
});
