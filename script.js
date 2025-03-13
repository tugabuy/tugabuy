document.addEventListener("DOMContentLoaded", function () {
    const fixedLogo = document.getElementById("fixedLogo");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            fixedLogo.classList.add("hidden");
        } else {
            fixedLogo.classList.remove("hidden");
        }
    });

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});
