// ScrollSpy activation
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar",
  offset: 200,
});

// Function to handle scroll events
function handleScroll() {
  // Scroll Progress Bar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Scroll Reveal for Sections
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("revealed");
    } else {
      section.classList.remove("revealed");
    }
  });

  // Update active class for navbar links
  const navLinks = document.querySelectorAll("a.nav-lin");
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Add a single event listener for scroll
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll); // Also call on load to reveal sections

// Smooth Scroll for Navbar Links
document.querySelectorAll("a.nav-lin").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// text changes auto
const textElement = document.querySelector(".secondary-title");

// Array of texts that will be typed
const texts = [
  "Tidak Ada Kopi Tidak Ada Cerita",
  "Sejak 2012, Kopi Gayo Terbaik Langsung dari Sumbernya",
  "From Gayo to the World: Authentic Coffee with a Unique Taste",
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 3000; // Delay between each full text

function type() {
  const currentText = texts[currentTextIndex];
  const displayedText = currentText.slice(0, currentCharIndex);

  textElement.textContent = displayedText;

  if (!isDeleting) {
    if (currentCharIndex < currentText.length) {
      currentCharIndex++;
      setTimeout(type, typingSpeed); // Continue typing
    } else {
      isDeleting = true; // Start deleting after the text is fully typed
      setTimeout(type, delayBetweenTexts);
    }
  } else {
    if (currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(type, deletingSpeed); // Continue deleting
    } else {
      isDeleting = false; // Start typing the next text
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }
}

// Start typing effect on page load
document.addEventListener("DOMContentLoaded", type);

// products section script
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 5,
  breakpoints: {
    375: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 200,
    },
    425: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 100,
    },
    768: {
      slidesPerView: 1.65,
      centeredSlides: true,
      spaceBetween: 50,
    },
    810: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 150,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 200,
    },
    1280: {
      slidesPerView: 3.5,
    },
  },
});

// review section script
const swiper2 = new Swiper(".swiper-container2", {
  slidesPerView: 1,
  spaceBetween: 500,
  centeredSlides: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: true,
    loop: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 200,
    },
    810: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 200,
    },
    1280: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 500,
    },
  },
});

const swiper3 = new Swiper(".swiper-container3", {
   slidesPerView: 1,
   centeredSlides: true,
   spaceBetween: 200,
   loop: true,
   allowTouchMove: false,
   autoplay: {
       delay: 3000,
       disableOnInteraction: false,
       loop: true,
   },
   breakpoints:{
     375:{
       slidesPerView: 1,
       centeredSlides: true,
       spaceBetween: 200,
     },
     425:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     768: {
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     810:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     1024:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     1280:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
   },
});
const swiper4 = new Swiper(".swiper-container4", {
   slidesPerView: 1,
   centeredSlides: true,
   spaceBetween: 200,
   loop: true,
   allowTouchMove: false,
   autoplay: {
       delay: 3000,
       disableOnInteraction: false,
       loop: true,
   },
   breakpoints:{
     375:{
       slidesPerView: 1,
       centeredSlides: true,
       spaceBetween: 200,
     },
     425:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     768: {
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     810:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     1024:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
     1280:{
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 200,
     },
   },
});