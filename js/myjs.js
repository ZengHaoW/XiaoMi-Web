/********************************************************************轮播图********************************************************************/
const change_img= document.querySelector(".prev-next").children;
const backward = change_img[0];
const forward = change_img[1];
let list = document.querySelectorAll("ul.img-list li");
const pointer_list = document.querySelectorAll(".banner .pointer a");



let current_id = 0;

pointer_list[current_id].style.backgroundColor = "rgb(255,255,255,0.4)";
pointer_list[current_id].style.border = "2px rgb(0,0,0,0.4) solid";
list[current_id].style.zIndex = "2";

backward.onclick = function () {
    list[current_id].style.zIndex = "0";
    pointer_list[current_id].style.backgroundColor = "rgb(0,0,0,0.4)";
    pointer_list[current_id].style.border = "2px rgb(255,255,255,0.4) solid";
    if (current_id === 0) {
        current_id = 3;
    }
    else
        current_id -= 1;
    pointer_list[current_id].style.backgroundColor = "rgb(255,255,255,0.4)";
    pointer_list[current_id].style.border = "2px rgb(0,0,0,0.4) solid";
    list[current_id].style.zIndex = "2";
}

forward.onclick = function () {
    list[current_id].style.zIndex = "0";
    pointer_list[current_id].style.backgroundColor = "rgb(0,0,0,0.4)";
    pointer_list[current_id].style.border = "2px rgb(255,255,255,0.4) solid";
    if (current_id === 3) {
        current_id = 0;
    }
    else
        current_id += 1;
    pointer_list[current_id].style.backgroundColor = "rgb(255,255,255,0.4)";
    pointer_list[current_id].style.border = "2px rgb(0,0,0,0.4) solid";
    list[current_id].style.zIndex = "2";
}



for (let i = 0; i < pointer_list.length; i++) {
    pointer_list[i].onclick = function () {
        pointer_list[current_id].style.backgroundColor = "rgb(0,0,0,0.4)";
        pointer_list[current_id].style.border = "2px rgb(255,255,255,0.4) solid";


        list[current_id].style.zIndex = "0";
        current_id = i;
        list[current_id].style.zIndex = "2";

        pointer_list[current_id].style.backgroundColor = "rgb(255,255,255,0.4)";
        pointer_list[current_id].style.border = "2px rgb(0,0,0,0.4) solid";

    }
}
/********************************************************************轮播图********************************************************************/



/********************************************************************good-info-list下拉********************************************************************/

let good_info_list = document.querySelectorAll(".show-goods a");
let good_info_list_length = good_info_list.length;
let bbb = document.querySelector(".goods-info").children;
for (let i = 0; i < good_info_list_length; i++) {
    good_info_list[i].onmouseover = function () {
        remove();
        bbb[i].style.display = "block";
    }

}

function remove() {
    for (let i = 0; i < bbb.length; i++) {
        bbb[i].style.display = "none";
    }
}
/********************************************************************good-info-list下拉********************************************************************/