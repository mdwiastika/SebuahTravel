window.addEventListener("load", function () {
  // nav 3 lines animation
  const nav_button = document.querySelector(".nav-button");
  const nav = document.querySelector("nav");
  const loading = this.document.getElementById("loading");
  const logo = this.document.getElementById("logo-east-java");
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 10);
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
      logo.src = "./../../assets/img/logo-scroll.png";
      header.classList.remove("h-[80px]", "sm:h-[90px]", "md:h-[120px]");
    } else {
      header.classList.add("h-[80px]", "sm:h-[90px]", "md:h-[120px]");
      logo.src = "./../../assets/img/logo.png";
      header.classList.remove("navbar-scroll");
    }
  }
});
