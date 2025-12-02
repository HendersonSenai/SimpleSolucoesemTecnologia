// Animação simples ao rolar
const items = document.querySelectorAll('.service-box, .portfolio-item');
window.addEventListener('scroll', () => {
    items.forEach(item => {
        const pos = item.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) item.classList.add('visible');
    });
});