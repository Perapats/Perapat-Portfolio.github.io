document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('fade-in');

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    themeToggle.addEventListener("click", () => {
        document.body.classList.add("fade-out");
        setTimeout(() => {
            document.body.classList.toggle("dark-mode");
            themeIcon.src = document.body.classList.contains("dark-mode")
                ? "pics/light.png"
                : "pics/dark.png";

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
            document.body.classList.remove("fade-out");
            document.body.classList.add("fade-in");
        }, 500);
    });

    function loadDarkMode() {
        const darkMode = localStorage.getItem("darkMode");
        if (darkMode === "enabled") {
            document.body.classList.add("dark-mode");
        }
    }
    loadDarkMode();

    const languageBtn = document.querySelector(".language-btn");
    languageBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = languageBtn.href;
        }, 500);
    });

    let lastScrollTop = 0;
    const header = document.querySelector("header");
    let isScrolling;

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        header.style.top = scrollTop > lastScrollTop ? "-100px" : "0";
        lastScrollTop = scrollTop;

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {}, 150);
    });
});
