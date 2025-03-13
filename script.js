function toggleMenu() {
    var sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
    } else {
        sidebar.classList.add("open");
    }
}
