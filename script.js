// Sidebar menu
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('#menu-btn');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});

// Dim effect
const dim = document.querySelector('.video-dim');

// Background dim effect (on scroll)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const max = window.innerHeight * 0.8;

    let progress = scrollY / max;
    progress = Math.min(Math.max(progress, 0), 1);

    const darkness = progress * 0.5;
    const blur = progress * 12; 

    dim.style.background = `rgba(0,0,0,${darkness})`
    dim.style.backdropFilter = `blur(${blur}px)`;
    dim.style.webkitBackdropFilter = `blur(${blur}px)`;
});

 ScrollReveal().reveal('.grid-item', {
    distance: '40px',
    duration: 400,
    easing: 'ease-out',
    interval: 60,
    reset: true,
 })