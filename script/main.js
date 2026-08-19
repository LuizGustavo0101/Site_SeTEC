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
        const trackContainer = carousel.querySelector(".carousel-track-container");
        const track = carousel.querySelector(".carousel-track");
        const slides = track ? Array.from(track.children) : [];
        const btnEsquerda = carousel.querySelector(".seta.esquerda");
        const btnDireita = carousel.querySelector(".seta.direita");
        const indicatorsContainer = carousel.querySelector(".carousel-indicators");

        if (!track || slides.length === 0) return;

        let slideAtual = 0;
        const totalSlides = slides.length;

        if (indicatorsContainer) {
            indicatorsContainer.innerHTML = "";
            slides.forEach((_, index) => {
                const dot = document.createElement("span");
                dot.classList.add("dot");
                if (index === 0) dot.classList.add("active"); 
                indicatorsContainer.appendChild(dot);
            });
        }
        
        const dots = carousel.querySelectorAll(".dot");

        function atualizarDots(index) {
            dots.forEach(dot => dot.classList.remove("active"));
            if (dots[index]) dots[index].classList.add("active");
        }

        function moverCarrossel(index) {
            const isMobile = window.innerWidth <= 768;
            
            if (isMobile && trackContainer) {
                const slideWidth = slides[0].getBoundingClientRect().width;
                trackContainer.scrollTo({
                    left: index * slideWidth,
                    behavior: 'smooth'
                });
            } else {
                track.style.transform = `translateX(-${index * 100}%)`;
            }
            atualizarDots(index);
        }

        if (btnDireita) {
            btnDireita.addEventListener("click", () => {
                slideAtual = (slideAtual + 1) % totalSlides;
                moverCarrossel(slideAtual);
            });
        }

        if (btnEsquerda) {
            btnEsquerda.addEventListener("click", () => {
                slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
                moverCarrossel(slideAtual);
            });
        }

        if (trackContainer) {
            trackContainer.addEventListener("scroll", () => {
                if (window.innerWidth <= 768) {
                    const scrollPosition = trackContainer.scrollLeft;
                    const slideWidth = slides[0].getBoundingClientRect().width;
                    
                    const novoIndex = Math.round(scrollPosition / slideWidth);
                    
                    if (novoIndex !== slideAtual && novoIndex >= 0 && novoIndex < totalSlides) {
                        slideAtual = novoIndex;
                        atualizarDots(slideAtual);
                    }
                }
            });
        }
        
        window.addEventListener("resize", () => {
            moverCarrossel(slideAtual);
        });
    });
});
