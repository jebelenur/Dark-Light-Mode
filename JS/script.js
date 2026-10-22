let black = document.getElementById("black");
let white = document.getElementById("white");

black.addEventListener("click", () => {
    document.body.style.background = "black";
    document.body.style.color = "white";

    white.classList.remove("d-none");
    black.classList.add("d-none");
});

white.addEventListener("click", () => {
    document.body.style.background = "white";
    document.body.style.color = "black";

    black.classList.remove("d-none");
    white.classList.add("d-none");
});