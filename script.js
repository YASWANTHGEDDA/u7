document.addEventListener("DOMContentLoaded", function () {
    // Fake API data for demonstration
    const users = 120;
    const transactions = 450;

    // Display data in cards
    document.getElementById("user-count").textContent = users;
    document.getElementById("transaction-count").textContent = transactions;

    // Theme toggle button
    const toggleThemeBtn = document.getElementById("toggle-theme");

    toggleThemeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
