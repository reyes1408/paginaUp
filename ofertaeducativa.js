// Manejar el clic en el botón de alternancia
document.getElementById("navbar-toggle").addEventListener("click", function() {
    var navbarCollapse = document.getElementById("navbar-collapse");
    if (navbarCollapse.style.display === "block") {
        navbarCollapse.style.display = "none";
    } else {
        navbarCollapse.style.display = "block";
    }
});

// Mostrar y ocultar el menú desplegable
var dropdownToggle = document.querySelector(".dropdown-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", function(e) {
    e.preventDefault();
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

// Ocultar el menú desplegable al hacer clic fuera de él
document.addEventListener("click", function(e) {
    if (e.target !== dropdownToggle) {
        dropdownMenu.style.display = "none";
    }
});
