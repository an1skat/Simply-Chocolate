document.addEventListener('DOMContentLoaded', function () {
  const productsSwiper = new Swiper('.products-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  const reviewsSwiper = new Swiper('.reviews-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});

const refs = {
  openBtn: document.querySelector('[data-modal-open]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  overlay: document.querySelector('[data-modal-overlay]'),
};
function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.overlay.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
refs.overlay.addEventListener('click', toggleModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
});

const input = document.querySelector('#phone');
window.intlTelInput(input, {
  initialCountry: 'ua',
  separateDialCode: true,
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js',
});
