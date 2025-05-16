function addTask(): void {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement;
  const taskList = document.getElementById("taskList") as HTMLUListElement;

  const task: string = taskInput.value.trim();

  if (task !== "") {
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = task;

    const delBtn: HTMLButtonElement = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = (): void => {
      li.remove();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

const addBtn = document.getElementById("addTaskBtn") as HTMLButtonElement;
addBtn.addEventListener("click", addTask);
