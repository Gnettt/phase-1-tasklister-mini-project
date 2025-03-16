document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function addTask() {
  let input = document.getElementById("new-task-description");
  let taskText = input.value.trim();
  if (taskText === "") return;
  
  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);
  
  input.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
}