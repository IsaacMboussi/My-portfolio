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