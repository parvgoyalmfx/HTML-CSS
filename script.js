function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value.trim();
    if (task !== "") {
        var li_1 = document.createElement("li");
        li_1.textContent = task;
        var delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function () {
            li_1.remove();
        };
        li_1.appendChild(delBtn);
        taskList.appendChild(li_1);
        taskInput.value = "";
    }
}
var addBtn = document.getElementById("addTaskBtn");
addBtn.addEventListener("click", addTask);
