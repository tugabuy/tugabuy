document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const logo = document.getElementById("logo");
    const slogan = document.getElementById("slogan");

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

    // Alteração da opacidade do logo e do slogan ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            logo.classList.add("scrolled");
            slogan.classList.add("scrolled");
        } else {
            logo.classList.remove("scrolled");
            slogan.classList.remove("scrolled");
        }
    });
});
