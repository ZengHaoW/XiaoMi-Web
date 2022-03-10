let a = document.querySelector(".a");
let a_text = document.querySelector(".a a");
let b = document.querySelector(".b");

a_text.onmouseover = function () {
    a.style.backgroundColor = "white";
}
a.onmouseover = function () {
    this.style.backgroundColor = "white";
}
