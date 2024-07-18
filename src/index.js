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
  openBtns: document.querySelectorAll('[data-modal-open]'),
  closeBtns: document.querySelectorAll('[data-modal-close]'),
  modals: document.querySelectorAll('[data-modal]'),
  overlay: document.querySelector('[data-modal-overlay]'),
};

function openModal(modal) {
  refs.modals.forEach(m => m.classList.add('is-hidden'));
  modal.classList.remove('is-hidden');
  refs.overlay.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  refs.modals.forEach(m => m.classList.add('is-hidden'));
  refs.overlay.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

refs.openBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const modalId = btn.getAttribute('data-modal-open');
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    openModal(modal);
  });
});

refs.closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    closeModal();
  });
});

refs.overlay.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const inputs = document.querySelectorAll('input[type="tel"]');
inputs.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: 'ua',
    separateDialCode: true,
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js',
  });
});
