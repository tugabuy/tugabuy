document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const logo = document.querySelector(".center-logo");
    const slogan = document.querySelector(".slogan");

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

    // Esconder logo e slogan ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logo.classList.add("hidden");
            slogan.classList.add("hidden");
        } else {
            logo.classList.remove("hidden");
            slogan.classList.remove("hidden");
        }
    });
});
