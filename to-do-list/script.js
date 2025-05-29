const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
    //Adding a task should clear the input field
    taskInput.focus();
});

// Allow user to select that they are done with a task by clicking on it
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});

// Allow user to delete a task once done using a delete button and space the delete button from the task text
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        event.target.appendChild(deleteButton);
    }
});

// Allow user to delete a task once done using a delete button
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            event.target.parentElement.remove();
        }
    }
});