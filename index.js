
document.addEventListener("DOMContentLoaded", function () {
    const Insights = document.getElementById("Insights");
    Insights.addEventListener("click", function () {
        window.location.href = "pages/insights/insights.html"
    });

    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");

    // Adiciona um ouvinte de clique ao botão de expansão
    menuToggle.addEventListener("click", function () {
        // Alternar a classe "show" no elemento do menu
        navbarNav.classList.toggle("show");
    });
});
