// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior

    const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust offset for header height
        behavior: 'smooth'
      });
    }
  });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Book Appointment Button Alert
const appointmentButton = document.querySelector('.cta-button, .button');
if (appointmentButton) {
  appointmentButton.addEventListener('click', () => {
    alert('Thank you for booking an appointment! We will contact you shortly.');
  });
}
// JavaScript for Carousel functionality (optional for advanced slides)
const carouselArrows = document.querySelectorAll(".carousel-arrow");
const content = document.querySelector(".carousel-content");

let slides = [
  "Exceptional facades delivered",
 
];
let currentSlide = 0;

// Event listener for arrows
carouselArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.closest(".left")) {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    } else if (e.target.closest(".right")) {
      currentSlide = (currentSlide + 1) % slides.length;
    }
    content.innerHTML = `<h1>${slides[currentSlide]}</h1>`;
  });
});


document.querySelectorAll('.location').forEach((location) => {
  location.addEventListener('mouseenter', () => {
    location.style.backgroundColor = '#e40046';
    location.style.color = '#fff';
  });
  location.addEventListener('mouseleave', () => {
    location.style.backgroundColor = '#fff';
    location.style.color = '#000';
  });
});


const projectContainer = document.querySelector('.project-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentProjectIndex = 0;

function updateProjectCarousel() {
  const projectWidth = projectContainer.querySelector('.project-item').clientWidth + 20; // Include gap
  projectContainer.style.transform = `translateX(-${currentProjectIndex * projectWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentProjectIndex = Math.max(currentProjectIndex - 1, 0);
  updateProjectCarousel();
});

nextButton.addEventListener('click', () => {
  const totalProjects = projectContainer.querySelectorAll('.project-item').length;
  currentProjectIndex = Math.min(currentProjectIndex + 1, totalProjects - 2); // Two items visible at a time
  updateProjectCarousel();
});



function updateProjectCarousel() {
  const projectWidth = projectContainer.querySelector('.project-item').clientWidth + 20; // Include gap
  projectContainer.style.transform = `translateX(-${currentProjectIndex * projectWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentProjectIndex = Math.max(currentProjectIndex - 1, 0);
  updateProjectCarousel();
});

nextButton.addEventListener('click', () => {
  const totalProjects = projectContainer.querySelectorAll('.project-item').length;
  currentProjectIndex = Math.min(currentProjectIndex + 1, totalProjects - 2); // Two items visible at a time
  updateProjectCarousel();
});



document.querySelector('.menu-toggle').addEventListener('click', () => {
  alert('Menu clicked! Add functionality here if needed.');
});
