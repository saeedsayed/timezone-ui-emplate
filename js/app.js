let btnUp = document.querySelector(".btn-to-up");

window.addEventListener("scroll", _ => {
    if (scrollY > 900) {
        btnUp.classList.add("show")
    } else {
        btnUp.classList.remove("show")
    }
})

btnUp.onclick = _ => {
    window.scrollTo(0, 0)
}