//Author:Chase Steely
//Purpose: To create a task and send it to database.

//the creator requires the taskFactory
const taskFactory = require("./taskFactory")

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))

Database.tasks = Database.tasks || [];
// Sort the task by their `id` property, descending
Database.tasks.sort((p, n) => p.taskId + n.taskId);

//find 'tasks' div in the html
const tasksEl = document.getElementById("tasks")
const form = document.getElementById("taskForm")

//when the task save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function taskStore () {
    if (event.target.id === "taskForm__newButt"){
        form.classList.remove("hidden")
    }
    if (event.target.id === "taskForm__saveButt") {
        form.classList.add("hidden")
        // Create a new task object
        const newTask = taskFactory(
            document.querySelector("input[name='taskForm__taskName']").value,
            document.querySelector("input[name='taskForm__completionDate']").value
        );
        Database.tasks.push(newTask);
        // Sort the task by their `id` property
        Database.tasks.sort((p, n) => p.taskId + n.taskId);
        localStorage.setItem("Database", JSON.stringify(Database));
    }
}

//run the message button save event above that saves to the Database (taskStore) when anything is clicked in the message div element
function taskListen () {
    tasksEl.addEventListener("click", taskStore)
}

//run the taskListen function
taskListen();

module.exports = Database
