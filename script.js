// Carousel Tea bos//
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let index = 0;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  index = (index + 1) % items.length;
  updateSlide();
}

setInterval(autoSlide, 4000);

// Flip Carp //
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Carousel About us //
const aboutCarousel = document.querySelector(".about-carousel .carousel-container");
const aboutSlides = document.querySelectorAll(".about-carousel .carousel-slide");
let aboutIndex = 0;
let startX = 0;
let endX = 0;

function showAboutSlide(index) {
  aboutCarousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextAboutSlide() {
  aboutIndex = (aboutIndex + 1) % aboutSlides.length;
  showAboutSlide(aboutIndex);
}

let aboutInterval = setInterval(nextAboutSlide, 3000);

aboutCarousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
aboutCarousel.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {

    aboutIndex = (aboutIndex + 1) % aboutSlides.length;
    showAboutSlide(aboutIndex);
  } else if (endX - startX > 50) {

    aboutIndex = (aboutIndex - 1 + aboutSlides.length) % aboutSlides.length;
    showAboutSlide(aboutIndex);
  }
  clearInterval(aboutInterval);
  aboutInterval = setInterval(nextAboutSlide, 3000);
});




