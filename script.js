const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 5000); // 5 seconds per slide


//flow

const flowElements = document.querySelectorAll('.flow-in');

function checkVisibility() {
  flowElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');   // Add class when visible
    } else {
      el.classList.remove('visible'); // Remove class when not visible
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
