const panels = document.querySelectorAll(".panel");

panels.forEach(i => {
    i.addEventListener('click', () => {
        removeActiveClass();
        i.classList.add("active");
    })
    
});

function removeActiveClass() {
    panels.forEach(i => {
        i.classList.remove("active")
    })
}