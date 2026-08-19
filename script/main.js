document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#nav_list ul li");
    const bar = document.querySelector(".bar");
    const navList = document.querySelector("#nav_list");

    function moveBar(item) {
        if (!bar || !item) return;

        bar.style.width = `${item.offsetWidth + 10}px`;
        bar.style.left = `${item.offsetLeft - 3}px`;
    }

    if (listItems.length > 0) {
        moveBar(listItems[0]);

        listItems.forEach((item) => {
            item.addEventListener("mouseenter", () => moveBar(item));
            item.querySelector("a")?.addEventListener("focus", () => moveBar(item));
        });

        navList?.addEventListener("mouseleave", () => moveBar(listItems[0]));
        window.addEventListener("resize", () => moveBar(listItems[0]));
    }

    const menuToggle = document.querySelector(".checkbox-toggle");
    document.querySelectorAll("#menu_mobile .menu a").forEach((link) => {
        link.addEventListener("click", () => {
            if (menuToggle) menuToggle.checked = false;
        });
    });

    document.querySelectorAll(".carousel").forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const slides = track ? Array.from(track.children) : [];
        const btnEsquerda = carousel.querySelector(".seta.esquerda");
        const btnDireita = carousel.querySelector(".seta.direita");

        if (!track || slides.length === 0 || !btnEsquerda || !btnDireita) return;

        let slideAtual = 0;

        function moverCarrossel(index) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        btnDireita.addEventListener("click", () => {
            slideAtual = (slideAtual + 1) % slides.length;
            moverCarrossel(slideAtual);
        });

        btnEsquerda.addEventListener("click", () => {
            slideAtual = (slideAtual - 1 + slides.length) % slides.length;
            moverCarrossel(slideAtual);
        });
    });
});
