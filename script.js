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

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "16ac5863-856f-43a4-913f-09cf6f14a8c8");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
