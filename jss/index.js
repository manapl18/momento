const js_clock = document.querySelector(".js-clock");
const base_color = "clicked";

function change_color(){
    const hasClass = js_clock.classList.contains(base_color);
    if(!hasClass)
        js_clock.classList.add(base_color);
    else
        js_clock.classList.remove(base_color);

}

function init(){
    js_clock.addEventListener("click",change_color);
}

init();