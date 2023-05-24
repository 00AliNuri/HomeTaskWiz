const nav = document.querySelector(".nav")

function changeBackground() {
    if (window.scrollY > 90) {
        nav.classList.add("afterScrool")
    } else {
        nav.classList.remove("afterScrool")
    }
}
window.addEventListener("scroll", changeBackground, true)

