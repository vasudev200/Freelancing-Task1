let menuLink = document.querySelector(".menu-link");
let navList = document.querySelector(".nav-link");
menuLink.addEventListener("click", function () {
  navList.classList.toggle("active");
});
