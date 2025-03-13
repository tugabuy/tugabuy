document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.style.left = "0";
    });

    menuClose.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });
});
