window.addEventListener("load", () => {

  const nav = document.querySelector(".header__nav");
  const icon = document.querySelector(".header__icon");

  if (nav && icon) {
    icon.addEventListener("click", () => {
      nav.classList.toggle("header__active");
      icon.classList.toggle("header__active");
    });
  }

  const btn = document.querySelector(".wrapper__btn");
  const modal = document.querySelector(".wrapper__modal");
  const btnClose = document.querySelector(".wrapper__close");

  btn.addEventListener("click", () => {
    modal.classList.add("wrapper__active");
  });

  btnClose.addEventListener("click", () => {
    modal.classList.remove("wrapper__active");
  });

  const picBtn = document.querySelector(".picture__btn");
  const conTent = document.querySelector(".picture__content");

  picBtn.addEventListener("click", function () {
    
    if (conTent.classList.toggle("picture__hiden")) {
      picBtn.textContent = "About Our Firm";
    } else {
      picBtn.textContent = "Reverso Context";
    }
  });
  const swiper = new Swiper('.swiper', {
    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const btnRow = document.querySelector(".row__btn");
  const modalRow = document.querySelector(".row__modal");
  const btnCloseRow = document.querySelector(".row__close");

  btnRow.addEventListener("click", () => {
    modalRow.classList.add("row__active");
  });

  btnCloseRow.addEventListener("click", () => {
    modalRow.classList.remove("row__active");
  });

  const date = document.querySelector('.footer__date');
  date.textContent = new Date().toLocaleDateString();
});
