const toggleBtn = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");
        const toggleIcon = toggleBtn.querySelector("img");

        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("show");
            if (menu.classList.contains("show")) {
                toggleIcon.src = "../res/quit-cross.png";
            } else {
                toggleIcon.src = "../res/menu.png";
            }
        });