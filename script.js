document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

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

    // Alteração da opacidade do logo ao rolar a página
    window.addEventListener("scroll", function () {
        var logo = document.querySelector(".header-logo");
        if (window.scrollY > 50) {
            logo.classList.add("scrolled");
        } else {
            logo.classList.remove("scrolled");
        }
    });
});
