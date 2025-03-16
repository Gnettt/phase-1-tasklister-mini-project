document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
 
  form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      
     
      const taskDescription = document.getElementById("new-task-description").value.trim();
      
      if (taskDescription === "") {
          alert("Task description cannot be empty!");
          return;
      }
      
      
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
     
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.style.marginLeft = "10px";
      
    
      deleteButton.addEventListener("click", () => {
          taskItem.remove();
      });
     
      taskItem.appendChild(deleteButton);
      
    
      taskList.appendChild(taskItem);
      
     
      form.reset();
  });
});
