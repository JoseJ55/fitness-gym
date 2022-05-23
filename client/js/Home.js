const navBtn = document.getElementById("nav-colapse-top-btn");
const navItems = document.getElementById("nav-colapse-dropdown");

function showNav() {
    if(navItems.style.display === "none"){
        navItems.style.display = "flex"
        return;
    }
    navItems.style.display = "none"
}

navBtn.addEventListener("click", showNav)