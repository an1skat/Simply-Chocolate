// document.addEventListener('DOMContentLoaded', function () {
//   const audio = document.getElementById('audio');
//   const playButton = document.getElementById('playButton');
//   const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const showOrHideElements = () => {
//     const randomNumber = getRandomNumber(1, 10);
//     console.log(`Generated random number: ${randomNumber}`);

//     const header = document.querySelector('header');
//     const main = document.querySelector('main');
//     const footer = document.querySelector('footer');
//     const image = document.querySelector("img[alt='gif']");

//     if (randomNumber === 6) {
//       header.classList.add('hidden');
//       main.classList.add('hidden');
//       footer.classList.add('hidden');
//       image.style.display = 'block'; 
//       playButton.classList.remove("hidden");
//       audio.play();
//     } else {
//       header.classList.remove('hidden');
//       main.classList.remove('hidden');
//       footer.classList.remove('hidden');
//       image.style.display = 'none';
//       playButton.classList.add("hidden");
//       audio.pause();
//       audio.curentTime = 0;
//     }
//   };

//   window.addEventListener('load', function () {
//     showOrHideElements();
//   });

//   playButton.addEventListener('click', function () {
//     audio.play();
//   });
// });

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
  closeBtn2: document.querySelector('[data-modal-close2]'),
  modal: document.querySelector('[data-modal]'),
  modal2: document.querySelector('[data-modal2]'),
  overlay: document.querySelector('[data-modal-overlay]'),
  sendBtn: document.querySelector('.reviews__btn--submit'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.overlay.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function openSecondModal() {
  refs.modal.classList.add('is-hidden');
  refs.modal2.classList.remove('is-hidden');
}

function closeSecondModal() {
  refs.modal2.classList.add('is-hidden');
  refs.overlay.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

refs.openBtn.addEventListener('click', toggleModal);
refs.closeBtn.addEventListener('click', toggleModal);
refs.overlay.addEventListener('click', () => {
  if (!refs.modal.classList.contains('is-hidden')) {
    toggleModal();
  } else if (!refs.modal2.classList.contains('is-hidden')) {
    closeSecondModal();
  }
});
refs.closeBtn2.addEventListener('click', closeSecondModal);

refs.sendBtn.addEventListener('click', function (e) {
  e.preventDefault();
  openSecondModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    } else if (!refs.modal2.classList.contains('is-hidden')) {
      closeSecondModal();
    }
  }
});

const input = document.querySelector('#phone');
window.intlTelInput(input, {
  initialCountry: 'ua',
  separateDialCode: true,
  utilsScript:
    'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js',
});
