

// Header animation

const fadeIn = document.querySelectorAll('.fade-in');

fadeIn.forEach(element => {
    const duration = Math.random() * 2;
    const delay = Math.random() * 2;
    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;
});