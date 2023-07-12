const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    newTask.addEventListener("click", markTaskAsCompleted);
    console.log(addEventListener);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Elimina";
    deleteButton.addEventListener("click", deleteTask);
    newTask.appendChild(deleteButton);
    deleteButton.classList.add("delete");

    taskList.appendChild(newTask);

    taskInput.value = "";
    console.log(taskInput);
  }
}

function markTaskAsCompleted(event) {
  const task = event.target;
  task.classList.toggle("completed");
  console.log(task);
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
  console.log(taskList);
}
