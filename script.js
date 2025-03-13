// Função para alternar o menu lateral
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('open');
}

// Função para validar e subscrever a newsletter
document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter button");

    if (newsletterForm) {
        newsletterForm.addEventListener("click", function () {
            const emailInput = document.querySelector(".newsletter input");
            const email = emailInput.value.trim();

            if (email === "" || !validateEmail(email)) {
                alert("Por favor, insira um email válido.");
                return;
            }

            alert("Subscreveu com sucesso!");
            emailInput.value = ""; // Limpar o campo após a subscrição
        });
    }
});

// Função para validar email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
