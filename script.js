/* v1.1 - Enhanced scroll animations */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-80', 'backdrop-blur-sm');
    } else {
        header.classList.remove('bg-opacity-80', 'backdrop-blur-sm');
    }
});