let addTaskBtn = document.querySelector(".add-task");
let taskDiv = document.querySelector(".task-div");
let inputBox = document.querySelector(".input-here");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value == "") {
        alert("Enter some Task First");
    } else {
        var newTask = document.createElement("div");
        newTask.className = "mytask";

        var taskTxt = document.createElement("p");
        taskTxt.className = "tasktxt";
        taskTxt.textContent = inputBox.value;
        var textLength = inputBox.value.length;
        var newClr = document.createElement("span");
        newClr.className = "clr";

        // random color Function
        function randomColor(){
            var colorS = ["#fd9ab0","#3dd4f4","#fabf02"];
            var randomColor = Math.floor(Math.random() * colorS.length);
            return colorS[randomColor];
        }

        newClr.style.backgroundColor = randomColor();

        //Function To remove task
        var delIcon = document.createElement("i");
        delIcon.className = "fa-solid fa-trash";
        delIcon.addEventListener("click", function () {
            newTask.remove();
        });
        // To creat taskDone Icon
        var taskDone = document.createElement("i");
        taskDone.className = "fa-solid fa-circle-check";
        taskDone.style.display = "none";
        taskDone.addEventListener("click", taskNahiHua);

        //To Add Task Undone Icon
        var taskUnDone = document.createElement("i");
        taskUnDone.className = "fa-regular fa-circle-check";
        taskUnDone.addEventListener("click", taskHogaya);

        //Function to change the taskdone undone icons
        function taskHogaya() {
            taskDone.style.display = "block";
            taskUnDone.style.display = "none";
            cutTheLine();
        }
        function taskNahiHua(){
            taskDone.style.display = "none  ";
            taskUnDone.style.display = "block";
            lineCut.style.width = "0%";
        }

        var lineCut = document.createElement("div");
        lineCut.className = "line";
        function cutTheLine(){            
                lineCut.style.width = textLength + 5 + "%";
        }


        console.log(textLength + 10);
        inputBox.value = ""; // Clear the input box after adding task
        if(textLength >= 70){
            alert("Max Character Reached");
        }
        else{

            newTask.appendChild(newClr);
            newTask.appendChild(taskTxt);
            newTask.appendChild(delIcon);
            newTask.appendChild(taskDone);
            newTask.appendChild(taskUnDone);
            taskTxt.appendChild(lineCut);        
            taskDiv.appendChild(newTask);
        }

    }
}
