document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const tasks = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskDescription = document.getElementById("new-task-description").value.trim();
    const priorityValue = document.getElementById("priority").value;
    const userValue = document.getElementById("user").value.trim();
    const durationValue = document.getElementById("duration").value.trim() || "N/A";
    
    if (taskDescription !== "" && !tasks.some(task => task.text === taskDescription)) {
      tasks.push({ text: taskDescription, priority: priorityValue, user: userValue, duration: durationValue });
      tasks.sort((a, b) => ({ high: 1, medium: 2, low: 3 }[a.priority] - { high: 1, medium: 2, low: 3 }[b.priority]));
      renderTasks();
      form.reset();
    }
  });

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
      const taskElement = document.createElement("li");
      taskElement.innerHTML = `<strong>${task.text}</strong> - ${task.user} (${task.duration} hours)`;
      taskElement.style.color = task.priority === "high" ? "red" : task.priority === "medium" ? "orange" : "green";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "x";
      deleteButton.className = "delete-btn";
      deleteButton.addEventListener("click", () => {
        tasks.splice(tasks.indexOf(task), 1);
        renderTasks();
      });

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => enableEditing(taskElement, task));

      taskElement.appendChild(deleteButton);
      taskElement.appendChild(editButton);
      taskList.appendChild(taskElement);
    });
  }

  function enableEditing(taskElement, task) {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.text;

    const editUser = document.createElement("input");
    editUser.type = "text";
    editUser.value = task.user;

    const editDuration = document.createElement("input");
    editDuration.type = "number";
    editDuration.value = task.duration;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
      if (editInput.value.trim() !== "") {
        task.text = editInput.value;
        task.user = editUser.value;
        task.duration = editDuration.value;
        renderTasks();
      } else {
        alert("Task description cannot be empty!");
      }
    });

    taskElement.innerHTML = "";
    taskElement.appendChild(editInput);
    taskElement.appendChild(editUser);
    taskElement.appendChild(editDuration);
    taskElement.appendChild(saveButton);
  }
});