let todo=[];
let i=0;

function addList()
{
    let taskName=document.getElementById("inputText").value.trim();
    if(taskName=="")
    {
        alert("please Enter the task Name");
        return;
    }
    let idNumber=`${Date.now()}-${Math.round(Math.random()*100)}`;
    console.log(idNumber);
    const task1={ 
        name:taskName,
        id:"checkbox"+idNumber
    };
    todo.push(task1);
    
    creatingTask(todo[i]);
    i++;
}

function creatingTask(todoll){
let cardSelection=document.getElementById("card2");

let todoList=document.createElement("div");
todoList.classList.add("d-flex","flex-row","justify-content-start");
todoList.id="t"+todoll.id;
cardSelection.appendChild(todoList);


let checkboxList=document.createElement("input");
checkboxList.type="checkbox";
checkboxList.id="c"+todoll.id;
todoList.appendChild(checkboxList);
checkboxList.onclick= function (){
        document.getElementById("l"+todoll.id).classList.toggle("strikeOff");
}

let labelList=document.createElement("div");
labelList.classList.add("label","d-flex","flex-row","justify-content-start");
todoList.appendChild(labelList);

let insideLabel=document.createElement("label");
insideLabel.htmlFor="c"+todoll.id;
insideLabel.id="l"+todoll.id;
insideLabel.textContent=todoll.name;
labelList.appendChild(insideLabel);

let deleteIcon=document.createElement("i");
deleteIcon.classList.add("bi","bi-trash3","ms-auto","bin");
deleteIcon.id="d"+todoll.id;
labelList.appendChild(deleteIcon);
deleteIcon.onclick=function (){
    cardSelection.removeChild(document.getElementById("t"+todoll.id));
}
}
