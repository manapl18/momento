const toDoForm = document.querySelector(".js-todoform"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js-toDoList");

const ToDo_LS = 'toDos';

let toDo_List = [];

function saveToDo(){
    localStorage.setItem(ToDo_LS,JSON.stringify(toDo_List));
}

function writeToDo(text){
    const new_li = document.createElement("li");
    const new_span = document.createElement("span");
    const delete_Btn = document.createElement("button");
    const user_id = toDo_List.length+1;
    
    delete_Btn.innerHTML = "del";
    delete_Btn.className = "button_base b3d_roll";
    new_span.innerText = text;

    new_li.appendChild(new_span);
    new_li.appendChild(delete_Btn);
    toDoList.appendChild(new_li);
    const toDo_Obj = {
        text:text,
        id:user_id
    };
    toDo_List.push(toDo_Obj);
    
    new_li.id=user_id;

    saveToDo();
    delete_Btn.addEventListener("click",deleteToDos);
}

function deleteToDos(event){
    const delete_target = event.target;
    const target_parent = delete_target.parentNode;
    
    const change_List = toDo_List.filter(function(check){
        return check.id !== parseInt(target_parent.id);
    })
    toDoList.removeChild(target_parent);
    
    toDo_List = change_List;
    saveToDo(toDo_List.text);
}

function loadToDos(){
    const loadToDo = localStorage.getItem(ToDo_LS);
    if(loadToDo !==null){
        const parseToDo = JSON.parse(loadToDo);
        parseToDo.forEach(function(to_do) {
            writeToDo(to_do.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    writeToDo(currentValue);
    toDoInput.value ="";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();