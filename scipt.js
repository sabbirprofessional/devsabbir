// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed header height
            behavior: 'smooth'
        });
    });
});

// Hover Effect for Project Cards
const projectImages = document.querySelectorAll('.project-card img');

projectImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = "scale(1.05)";
        image.style.transition = "transform 0.3s ease";
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = "scale(1)";
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});


// Dynamic Year
const yearElement = document.querySelector('.year'); // Selecting the element with class 'year'
if (yearElement) {
    const currentYear = new Date().getFullYear(); // Get the current year
    yearElement.textContent = currentYear; // Set the year in the span
} else {
    console.error("Element with class 'year' not found!");
}
