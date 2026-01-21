// Efeito de Scroll na Navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const logo = document.querySelector('.logo img'); // Seleciona a logo

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        // Opcional: Reinicia uma versão suave da animação ao voltar ao topo
        logo.style.animation = 'none';
        setTimeout(() => logo.style.animation = 'puzzleAssemble 1.2s ease-out forwards', 10);
    }
});

// Revelação de Elementos ao Rolar (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});