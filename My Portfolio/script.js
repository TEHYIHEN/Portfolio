const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
});

sr.reveal('.home-text', {origin: 'top'});
sr.reveal('.about-img, .service-item, .about-text' ,{origin: 'bottom'});
sr.reveal('.about-text h2, .text-center' ,{origin: 'top'});
sr.reveal('.profile', {origin: 'top'});