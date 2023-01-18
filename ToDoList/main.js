var list = document.querySelector("#list");
var form = document.querySelector("#Form");
let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var txtInput = document.querySelector("input[name='txt']").value;
    let li = document.createElement("li");
    li.innerHTML = txtInput;
    li.style.backgroundColor = "red";
    li.style.listStyle = "none";
    li.style.marginTop = "10px";
    li.style.borderRadius = "10px";
    li.style.padding = "5px";
    
    list.appendChild(li)
    let task = {
        text: txtInput,
        done: false
    };

    var clp = document.createElement("span") 
    clp.innerHTML = '<i class="fa-solid fa-trash"></i>'
    clp.style.float = "right"
    
    clp.addEventListener("click", deletshow)
    clp.className = "close";
    clp.addEventListener("click", deletlocal)
    li.appendChild(clp)

    tasksArray.push(task);
    savelocal(tasksArray);
    console.log(task)
    
})
function savelocal(data){
    localStorage.setItem("tasks", JSON.stringify(data))
}
function deletlocal(data){
    localStorage.removeItem("tasks", JSON.stringify(data))                
}
function deletshow(){
      var current_tasks = document.querySelectorAll(".close");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();}}
}
