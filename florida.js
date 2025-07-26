
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
