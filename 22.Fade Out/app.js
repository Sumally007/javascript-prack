let arrow = document.getElementById("arrow");


window.addEventListener("scroll", () => {
    let position = window.scrollY;
    if(position <= 5 ){
        arrow.classList.toggle("fade-out")
        arrow.classList.toggle("fade-in")
    }
})