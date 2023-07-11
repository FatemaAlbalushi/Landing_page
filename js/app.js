// Define Global Variables
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

// Helper function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Build the navigation menu
function buildNavMenu() {
  sections.forEach(function(section) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = section.getAttribute('data-nav');
    anchor.setAttribute('href', `#${section.id}`);
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {
  window.addEventListener('scroll', function() {
    sections.forEach(function(section) {
      if (isInViewport(section)) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection() {
  navList.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Build the navigation menu
buildNavMenu();

// Add class 'active' to section when near top of viewport
setActiveSection();

// Scroll to section on link click
scrollToSection();

