console.log("JS LOADED");

let inputField = document.getElementsByClassName("hot_string");
let addButton = document.getElementById("actbut");
let taskBox = document.getElementById("task-box");


function randomname()
{
    return "task" + Math.random().toString(36).slice(2);
}


function addTask()
{
    let filltext = inputField[0].value;
    let id = randomname();
    let id2 = randomname();
    if (inputField[0].value == ""){
        return NaN;
    }
   
    const task = document.createElement("div");
    task.className = "task";


    let element = document.createElement("input");
    element.type = "checkbox";
    element.id = id;

    let filling = document.createElement("label");
    filling.htmlFor = id;
    filling.textContent = filltext;

    let del = document.createElement("input");
    del.type = "button";
    del.className = "delete";
    del.value = "X";
    del.id = id2;

     del.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(element);
    task.appendChild(filling);
    task.appendChild(del);

    taskBox.appendChild(task);

    inputField[0].value = "";
}

addButton.addEventListener('click', addTask)

