const aboutNavBtn = document.getElementById("aboutLink");
const trainerNavBtn = document.getElementById("trainersLink");
const shopNavBtn = document.getElementById("shopLink");
// const cartNavBtn = document.getElementById("cartLink");
// const profileNavBtn = document.getElementById("profileLink");

const quickHover = document.getElementById("nav-items-about-title-items");

const colAboutBtn = document.getElementById("colAboutLink");
const colTrainerBtn = document.getElementById("colTrainersLink");
const colShopBtn = document.getElementById("colShopLink");

const aboutQuickLink = document.getElementById("infoDropNav");
const productsQuickLink = document.getElementById("productsDropNav");
const trainersQuickLink = document.getElementById("trainersDropNav");

const mainSection = document.getElementById("main");
const aboutSection = document.getElementById("about");
const productsSection = document.getElementById("products");
const trainersSection = document.getElementById("trainers");

const modileDrop = document.getElementById("nav-colapse-top-btn");
const dropItems = document.getElementById("nav-colapse-dropdown");

window.addEventListener("load", () => {
    console.log(window.location.pathname)
    if(window.location.pathname != "/") {
        quickHover.style.display = "none";
    }
})

aboutQuickLink.addEventListener("click", (e) => {
    e.preventDefault();
    // window.location.href = "#about";
    aboutSection && aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
})

productsQuickLink.addEventListener("click", (e) => {
    // window.location.href = "#products";
    e.preventDefault();
    productsSection && productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
})

trainersQuickLink.addEventListener("click", (e) => {
    // window.location.href = "#trainers";
    e.preventDefault();
    trainersSection && trainersSection.scrollIntoView({ behavior: "smooth", block: "start"})
})


aboutNavBtn.addEventListener("click", (e) => {
    // console.log(window.location.href)
    if(window.location.pathname == "/") {
        e.preventDefault();
        mainSection && mainSection.scrollIntoView({ behavior: "smooth", block: "start" })
        return;
    }
    window.location.href = "/"
})

colAboutBtn.addEventListener("touchend", (e) => {
    window.location.href = "/"
}, false)


trainerNavBtn.addEventListener("click", () => {
    window.location.href = "/trainers";
})

colTrainerBtn.addEventListener("touchend", (e) => {
    window.location.href = "/trainers";
}, false)


shopNavBtn.addEventListener("click", () => {
    window.location.href = "/shop";
})

colShopBtn.addEventListener("touchend", (e) => {
    window.location.href = "/shop";
}, false)

// cartNavBtn.addEventListener("click", () => {
//     window.location.href = "/cart";
// })

// profileNavBtn.addEventListener("click", () => {
//     window.location.href = "/profile";
// })

modileDrop.addEventListener("touchend", (e) => {
    e.preventDefault();
    dropItems.style.display = "flex";
})