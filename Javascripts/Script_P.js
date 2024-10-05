document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Get the href attribute
            const href = this.getAttribute('href');

            // Check if the href attribute starts with '#' (for internal anchors)
            if (href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1); // Remove the '#' from the href
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handling Contact Form Submission
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            console.log('Form submitted:', data);

            // You can send the data to a server here if needed
        });
    }

    // Simple Image Slideshow
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    showSlide(currentIndex);

    document.querySelector('#next')?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    document.querySelector('#prev')?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    
    // JavaScript for Typing and Erasing Effect
    const roles = ["Software Engineer", "Web Developer", ".NET Developer", "Independent Professional"];
    const roleElement = document.querySelector('.role');
    
    let index = 0;
    let roleIndex = 0;
    let isErasing = false;
    let text = '';
    let timer;
    
    function type() {
        if (isErasing) {
            text = text.substring(0, text.length - 1);
        } else {
            text = roles[roleIndex].substring(0, text.length + 1);
        }
        roleElement.textContent = text;
        
        if (isErasing) {
            timer = setTimeout(type, 50);
        } else {
            if (text === roles[roleIndex]) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    isErasing = true;
                    type();
                }, 2000); // Wait before starting to erase
            } else {
                timer = setTimeout(type, 100);
            }
        }
        
        if (isErasing && text === '') {
            isErasing = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    
    type();

});
// JavaScript to toggle the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('nav-active');
});

