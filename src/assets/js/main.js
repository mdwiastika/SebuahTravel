window.addEventListener("load", function () {
  // nav 3 lines animation
  const nav_button = document.querySelector(".nav-button");
  const nav = document.querySelector("nav");
  const loading = this.document.getElementById("loading");
  const logo = this.document.getElementById("logo-east-java");
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 500);
  nav_button.addEventListener("click", function () {
    nav.classList.toggle("hidden");
    nav_button.classList.toggle("nav-active");
  });
  //Blur navbar scroll
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY || window.pageYOffset;
    getScroll(scrollPosition);
  });
  let cekScrollStart = this.window.scrollY || this.window.pageYOffset;
  getScroll(cekScrollStart);
  function getScroll(scrollPosition) {
    if (scrollPosition > 0) {
      header.classList.add("navbar-scroll");
      logo.src = "./assets/img/logo-scroll.png";
      header.classList.remove("h-[80px]", "sm:h-[90px]", "md:h-[120px]");
    } else {
      header.classList.add("h-[80px]", "sm:h-[90px]", "md:h-[120px]");
      logo.src = "./assets/img/logo.png";
      header.classList.remove("navbar-scroll");
    }
  }
});

const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

startSlide();
