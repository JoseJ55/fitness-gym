const loadAnimation = document.getElementById("loadAnimation");
const loadContainer = document.getElementById("loadAnimation-container");
const loadTop = document.getElementById("loadAnimation-top");
const loadbottom = document.getElementById("loadAnimation-bottom");

window.addEventListener("load", (e) => {
    e.preventDefault();
    loadTop.style.animationName = "gotoBottom";
    loadTop.style.animationDuration = "1s";
    loadTop.style.animationFillMode = "forwards";

    loadbottom.style.animationName = "gotoTop";
    loadbottom.style.animationDuration = "1s";
    loadbottom.style.animationFillMode = "forwards";

    setTimeout(() => {
        // loadAnimation.style.zIndex = "-1000";
        loadAnimation.style.display = "none";
    }, 1000)
})