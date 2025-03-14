document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const header = document.getElementById("header");

    // Alternar menu ao clicar no botão
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Desaparecer logo e slogan ao fazer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("hidden");
        } else {
            header.classList.remove("hidden");
        }
    });
});
