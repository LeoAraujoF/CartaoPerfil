function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("profileCard").classList.toggle("dark-mode");

    // Alternar o ícone entre o sol e a lua
    const icon = document.getElementById("themeIcon");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-sun");  // Remove ícone de sol
        icon.classList.add("fa-moon");    // Adiciona ícone de lua
    } else {
        icon.classList.remove("fa-moon"); // Remove ícone de lua
        icon.classList.add("fa-sun");     // Adiciona ícone de sol
    }
}
