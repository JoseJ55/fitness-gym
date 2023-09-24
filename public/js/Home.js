const navBtn = document.getElementById("nav-colapse-top-btn");
const navItems = document.getElementById("nav-colapse-dropdown");
const trainerInfoLink = document.getElementById("trainer-info-link");
const productsInfoLink = document.getElementById("products-info-link");

const faders = document.querySelectorAll(".fade-in-animate");
const rightSliders = document.querySelectorAll(".slide-in-right-animate");
const leftSliders = document.querySelectorAll(".slide-in-left-animate");
const bottomSliders = document.querySelectorAll(".slide-in-bottom-animate");

function showNav() {
    if(navItems.style.display === "none"){
        navItems.style.display = "flex"
        return;
    }
    navItems.style.display = "none"
}

function goToTrainers() {
    window.location.href = "/trainers";
}

function goToShop() {
    window.location.href = "/shop"
}

const appearOptions = {
    threshold: .2
};

const appearOnScroll = new IntersectionObserver(function(entires, appearOnScroll){
    entires.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

rightSliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

leftSliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

bottomSliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

navBtn.addEventListener("click", showNav)
trainerInfoLink.addEventListener("click", goToTrainers)
productsInfoLink.addEventListener("click", goToShop)


// This is for the header main text 
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('main-container');
    
    const textLetter = document.querySelectorAll(".main-letter");

    let animationDuration = 0.5;
    setTimeout(() => {
        textLetter.forEach((letter) => {
            letter.style.animation = `fadeUp ${animationDuration}s forwards`;
    
            animationDuration += 0.5;
        })
    }, 500)

})

// Custom Button logic


const customButton = document.getElementById("shopButton");

customButton.addEventListener("click", goToShop)