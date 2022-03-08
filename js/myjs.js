const change_img= document.querySelector(".prev-next").children;
const backward = change_img[0];
const forward = change_img[1];
let list = document.querySelectorAll("ul.img-list li");

let current_id = 0;
list[current_id].style.zIndex = "0";

backward.onclick = function () {
    list[current_id].style.zIndex = "0";
    if (current_id === 0) {
        current_id = 3;
    }
    else
        current_id -= 1;
    list[current_id].style.zIndex = "2";
}

forward.onclick = function () {
    list[current_id].style.zIndex = "0";
    if (current_id === 3) {
        current_id = 0;
    }
    else
        current_id += 1;
    list[current_id].style.zIndex = "2";
}

const pointer_list = document.querySelectorAll(".banner .pointer a");
let current_pointer = 2;
pointer_list[current_pointer].style.backgroundColor = "rgb(255,255,255,0.4)";
pointer_list[current_pointer].style.border = "2px rgb(0,0,0,0.4) solid";

for (let i = 0; i < pointer_list.length; i++) {
    pointer_list[i].onclick = function () {
        pointer_list[current_pointer].style.backgroundColor = "rgb(0,0,0,0.4)";
        pointer_list[current_pointer].style.border = "2px rgb(255,255,255,0.4) solid";
        current_pointer = i;

        list[current_id].style.zIndex = "0";
        current_id = i;
        list[current_id].style.zIndex = "2";

        pointer_list[current_pointer].style.backgroundColor = "rgb(255,255,255,0.4)";
        pointer_list[current_pointer].style.border = "2px rgb(0,0,0,0.4) solid";

    }
}