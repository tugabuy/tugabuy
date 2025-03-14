document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    const logoContainer = document.querySelector(".logo-container");

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

    // Desaparecer logótipo e slogan ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Ajusta conforme necessário
            logoContainer.classList.add("scrolled");
        } else {
            logoContainer.classList.remove("scrolled");
        }
    });
});
