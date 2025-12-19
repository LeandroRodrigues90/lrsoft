// 1. Efeito de Digitação no Título Principal
const titulo = document.querySelector('.apresentação h1');
const texto = titulo.innerHTML;
titulo.innerHTML = '';

function digitar(i) {
    if (i < texto.length) {
        titulo.innerHTML += texto.charAt(i);
        setTimeout(() => digitar(i + 1), 75);
    }
}

// Inicia a digitação após o carregamento
window.addEventListener('load', () => digitar(0));

// 2. Revelação ao Rolar (Scroll Reveal)
// Usando Intersection Observer para melhor performance
const observerOptions = {
    threshold: 0.15 // Dispara quando 15% do elemento aparece
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Header Dinâmico (Muda ao rolar)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '10px 0';
        header.style.backgroundColor = '#fff';
    }
});

// 4. Menu Ativo Automático
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link');
        }
    });
});