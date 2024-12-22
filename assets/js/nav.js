export function nav() {
    const f = document.querySelector("#hamburger"), g = document.querySelector("#navbar");
    f.addEventListener("click", () => {
        g.classList.toggle("navbar-active")
    });
}