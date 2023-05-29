let backButton = document.getElementById('backButton04');

backButton.addEventListener("click",function(){
    window.location.replace('/');

});


const  inputBox = document.getElementById('input-box');
const  listContainer = document.getElementById('list-container');

function addTask()
{
    if(inputBox.value === "")
    {
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    save();
};

document.addEventListener('keydown', (event)=> {    
    if(event.key === "Enter")
    {
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }

}, false);

function save(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
};

showList();


