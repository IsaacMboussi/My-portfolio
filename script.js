// Form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Need to create a function to handle the form submission here
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
window.addEventListener('scroll', function() {
    // Add scroll-based animations here
});

// Add reveal animation for sections
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

// Particle effect for hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const home = document.querySelector('#home');
    home.appendChild(particle);
    
    const size = Math.random() * 5 + 2;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        animation-duration: ${duration}s;
    `;
    
    particle.addEventListener('animationend', () => particle.remove());
}

setInterval(createParticle, 100);

// Project filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const projectCards = document.querySelectorAll('.project-card');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.dataset.category;
        
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.classList.add('hidden');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
            }
        });
    });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Project filtering
    const projectFilters = document.querySelectorAll('[data-category]');
    const projects = document.querySelectorAll('.col-md-4[data-category]');

    projectFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            projectFilters.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked filter
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            projects.forEach(project => {
                if (category === 'all' || project.getAttribute('data-category') === category) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 0);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', formObject);
        });
    }
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap modal
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get data from card
            const image = this.getAttribute('data-image');
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            
            // Set modal content
            document.getElementById('modalImage').src = image;
            document.getElementById('imageModalLabel').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            
            // Show modal
            imageModal.show();
        });
    });

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('imageModal').classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            imageModal.hide();
        }
    });

    // Optional: Add zoom functionality
    let scale = 1;
    const modalImage = document.getElementById('modalImage');
    
    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale *= delta;
        
        // Limit scale
        scale = Math.min(Math.max(0.5, scale), 3);
        
        this.style.transform = `scale(${scale})`;
    });

    // Reset zoom when modal closes
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function() {
        scale = 1;
        modalImage.style.transform = 'scale(1)';
    });
}); 