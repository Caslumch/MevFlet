
document.addEventListener("DOMContentLoaded", function () {
    const Insights = document.getElementById("Insights");
    Insights.addEventListener("click", function () {
        window.location.href = "pages/insights/insights.html"
    });

    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");

    menuToggle.addEventListener("click", function () {
        navbarNav.classList.toggle("show");
    });
});
