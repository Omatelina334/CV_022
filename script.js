// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.cv-navbar');
    if (navbar) {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// Animate skill bars on page load
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.skill-bar');
    if (bars.length > 0) {
        // reset then animate
        bars.forEach(b => {
            const target = b.style.width;
            b.style.width = '0';
            setTimeout(() => { b.style.width = target; }, 200);
        });
    }
});
