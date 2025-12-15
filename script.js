document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll Setup
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Simple Parallax Effect on Hero Image
    const heroImage = document.querySelector('.hero-img');
    const pinkBlob = document.querySelector('.blob-pink');
    const greenBlob = document.querySelector('.blob-green');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
        
        if (pinkBlob) {
            pinkBlob.style.transform = `translate(0, ${scrolled * -0.1}px)`;
        }
        
        if (greenBlob) {
            greenBlob.style.transform = `translate(0, ${scrolled * -0.15}px)`;
        }
    });

    // Header Appearance on Scroll
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll <= 0) {
            header.style.backgroundColor = 'transparent';
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            header.style.backgroundColor = 'rgba(255, 253, 247, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle (Basic Alert for prototype)
    const menuToggle = document.querySelector('.menu-toggle');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Menu overlay would expand here.');
        });
    }
});