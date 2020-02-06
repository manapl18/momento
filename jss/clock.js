const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const dayList = ["Sunday","Monday","TuesDay","WendsDay","Thursday","Friday","Saturday"];
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = dayList[date.getUTCDay()];
    clockTitle.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes} ${hours<=12?`AM`:`PM`}\n${day}`;
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init()