// Select all necessary elements
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Function to update active slide and dot
function showSlide(index) {
  // Reset all slides and dots
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });

  // Activate current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Add click events to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Optional: Auto-play functionality
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds
