const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
    const setMenu = (open) => {
        mobileMenu.classList.toggle('open', open);
        menuToggle.textContent = open ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    menuToggle.addEventListener('click', () => {
        setMenu(!mobileMenu.classList.contains('open'));
    });

    // close the menu after tapping a link (needed for the #work anchor)
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });
}
