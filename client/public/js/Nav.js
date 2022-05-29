const aboutNavBtn = document.getElementById("aboutLink");
const trainerNavBtn = document.getElementById("trainersLink");
const shopNavBtn = document.getElementById("shopLink");
const cartNavBtn = document.getElementById("cartLink");
const profileNavBtn = document.getElementById("profileLink");

const aboutQuickLink = document.getElementById("infoDropNav");
const productsQuickLink = document.getElementById("productsDropNav");
const trainersQuickLink = document.getElementById("trainersDropNav");

aboutQuickLink.addEventListener("click", () => {
    window.location.href = "#about";
})

productsQuickLink.addEventListener("click", () => {
    window.location.href = "#products";
})

trainersQuickLink.addEventListener("click", () => {
    window.location.href = "#trainers";
})

aboutNavBtn.addEventListener("click", () => {
    window.location.href = "/"
})

trainerNavBtn.addEventListener("click", () => {
    window.location.href = "/trainers";
})

shopNavBtn.addEventListener("click", () => {
    window.location.href = "/shop";
})

cartNavBtn.addEventListener("click", () => {
    window.location.href = "/cart";
})

profileNavBtn.addEventListener("click", () => {
    window.location.href = "/profile";
})