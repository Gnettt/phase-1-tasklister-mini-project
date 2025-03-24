document.addEventListener("DOMContentLoaded", () => {
 
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const taskInput = document.getElementById("new-task-description")
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please fill out this field");
        return;
      }
  
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = ("delete");
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", () => {
        listItem.remove();
      });
  
      listItem.appendChild(deleteButton);
  
      taskList.appendChild(listItem);
  
      taskInput.value = "";
  
   });
  });