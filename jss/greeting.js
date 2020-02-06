const nameform = document.querySelector(".js-nameform"),
    nameinput = nameform.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = nameinput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName(){
    nameform.classList.add(SHOWING_CN);
    nameform.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    nameform.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currnetUser = localStorage.getItem(USER_LS);
    if(currnetUser === null){
        askName();
    }else{
       paintGreeting(currnetUser);
    }
}

function init(){
    loadName(); 
}

init();