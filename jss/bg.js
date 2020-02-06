const bg_back = document.querySelector("body"),
    signal = document.querySelector(".js-footer"),
    signal_chile = signal.querySelector(".changeImg"),
    IMG = new Image(),
    IMG_NUM = 4;

function paintImg(number){
    IMG.src=`${number}.jpg`;
    IMG.classList.add("bgImg");
    bg_back.classList.add("bgImg");
    bg_back.prepend(IMG);
}

function changeImg(){
    if(bg_back.className.indexOf("bgImg") !== -1)
    {
        IMG.remove();
        const number = MakeRandNum();
        paintImg(number);
    }
}


function MakeRandNum(){
    const randomNumber = Math.floor(Math.random()*IMG_NUM);
    return randomNumber
}

function init(){
    const number = MakeRandNum();
    paintImg(number);
    console.log(signal);
    signal_chile.addEventListener("click",changeImg);
}

init();
//setInterval(changeImg,3000);
