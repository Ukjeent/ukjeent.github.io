

// Header animation

const fadeIn = document.querySelectorAll('.fade-in');

// fadeIn.forEach(element => {
//     const duration = Math.random() * 2;
//     const delay = Math.random() * 2;
//     element.style.animationDuration = `${duration}s`;
//     element.style.animationDelay = `${delay}s`;
// });

fadeIn.forEach((element, index) => {
    const delay = (index + 5) / 17;
    element.style.animationDelay = `${delay}s`;
});


// Reveal elements 

// SlideIn
function reveal(element) {
    const reveals = document.querySelectorAll(element);
    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("in-view");
          } else {
            reveals[i].classList.remove("in-view");
          }
      }
}

window.addEventListener("scroll", () => {
    reveal('.slide-in-on-scroll');
    reveal('.fade-in-on-scroll');
    reveal('.stroke');
});