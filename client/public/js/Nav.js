const trainerNavBtn = document.getElementById("trainersLink");
const aboutNavBtn = document.getElementById("aboutLink");

aboutNavBtn.addEventListener("click", () => {
    window.location.href = "/"
})

trainerNavBtn.addEventListener("click", () => {
    window.location.href = "/trainers.html";
})