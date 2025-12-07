// ANIMAÇÃO DE SCROLL (reveal)
function revealElements() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();
