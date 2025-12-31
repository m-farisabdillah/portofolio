// Inisialisasi Icon Lucide
lucide.createIcons();

// Toggle Menu Mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Pembuatan Partikel Latar Belakang
const container = document.getElementById('particles-container');
for (let i = 0; i < 30; i++) {
    const node = document.createElement('div');
    node.className = 'glow-node';
    node.style.left = Math.random() * 100 + 'vw';
    node.style.top = Math.random() * 100 + 'vh';
    node.style.animationDelay = Math.random() * 10 + 's';
    node.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(node);
}

// Animasi Reveal saat Scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// Efek Navbar saat Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav div');
    if (window.scrollY > 50) {
        nav.classList.add('py-2');
        nav.classList.remove('py-3');
    } else {
        nav.classList.add('py-3');
        nav.classList.remove('py-2');
    }
});