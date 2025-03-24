document.addEventListener("DOMContentLoaded", () => {
    // your code here
  
  const taskForm = document.querySelector("#create-task-form");
  
  const taskList = document.querySelector("#tasks");
  const defaultTask = document.createElement ("li");
  defaultTask.textContent = "Wash the dishes";
  taskList.appendChild(defaultTask);
  
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const taskDescription = document.querySelector("#new-task-description").value.trim();
    
    if (taskDescription !=="") {
      
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;
      
      taskList.appendChild(newTask);
    
      document.querySelector("#new-task-description").value = "";
    }
  });
  
  const darkButton = document.createElement("button");
  darkButton.textContent = "Dark Mode";
  
  darkButton.onclick = function () {
      const bodyStyles = getComputedStyle(document.body);
      const currentBgColor = bodyStyles.backgroundColor;
  
      if (currentBgColor === "rgb(0, 0, 0)") { // Check for black
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
      } else {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
      }
  };
  
  document.querySelector("#main-content").insertBefore(darkButton, taskForm);
  });