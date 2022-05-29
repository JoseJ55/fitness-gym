const navBtn = document.getElementById("nav-colapse-top-btn");
const navItems = document.getElementById("nav-colapse-dropdown");
const trainerInfoLink = document.getElementById("trainer-info-link");
const productsInfoLink = document.getElementById("products-info-link");

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

navBtn.addEventListener("click", showNav)
trainerInfoLink.addEventListener("click", goToTrainers)
productsInfoLink.addEventListener("click", goToShop)