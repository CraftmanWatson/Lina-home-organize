const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const homeScreen = document.querySelector(".hero");
const aboutScreen = document.querySelector(".about");
const catalogueScreen = document.querySelector(".catalogue");
const testimonialScreen = document.querySelector(".testimonial");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const aboutBtn = document.querySelector(".about-btn");
const aboutBtn2 = document.querySelector(".hero-cta");
const catalogueBtn = document.querySelector(".catalogue-btn");
const testimonialBtn = document.querySelector(".testimonial-btn");
const contactBtn = document.querySelector(".contact-btn");

const catalog1 = document.querySelector(".products1");
const catalog2 = document.querySelector(".products2");
const catalog3 = document.querySelector(".products3");
const catalog4 = document.querySelector(".products4");

const toCatalog1 = document.querySelector(".catalogue-card1");
const toCatalog2 = document.querySelector(".catalogue-card2");
const toCatalog3 = document.querySelector(".catalogue-card3");
const toCatalog4 = document.querySelector(".catalogue-card4");

navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

aboutBtn.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
aboutBtn2.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

catalogueBtn.addEventListener("click", function() {
    catalogueScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


testimonialBtn.addEventListener("click", function() {
    testimonialScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

toCatalog1.addEventListener("click", function() {
    catalog1.scrollIntoView({behavior: "smooth"});
});
toCatalog2.addEventListener("click", function() {
    catalog2.scrollIntoView({behavior: "smooth"});
});
toCatalog3.addEventListener("click", function() {
    catalog3.scrollIntoView({behavior: "smooth"});
});
toCatalog4.addEventListener("click", function() {
    catalog4.scrollIntoView({behavior: "smooth"});
});

const sliders = document.querySelectorAll(
    '.catalogue-cards-group, .testimonial-cards-group, .catalogue-aisles-cards-group'
);

sliders.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
    });
});