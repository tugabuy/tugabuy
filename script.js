document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.classList.remove("active");
        }
    });
});
