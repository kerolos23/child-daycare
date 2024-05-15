// Select the burger menu icon and nav bar elements
const menuIcon = document.querySelector(".burger-icon");
const navBar = document.querySelector(".nav-bar");

menuIcon.addEventListener("click", function () {
  toggleActiveClass(menuIcon);
  toggleActiveClass(navBar);
});

// Function to toggle the 'active' class on an element
function toggleActiveClass(ele) {
  ele.classList.toggle("active");
}

// Initialize Hero Section Swiper
const swiper = new Swiper(".myHeroSwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
  },
  loop: true,
  effect: "fade",
});
