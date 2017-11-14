//Author:Chase Steely
//Purpose: To create a task and send it to database.

//the creator requires the taskFactory
const db = require("../Database")
const Database = db.load()
const tasksFactory = require("./tasksFactory")
const taskDom = require("./taskDom")
//pull the database from local storage
// let Database = JSON.parse(localStorage.getItem("Database"))
Database.tasks = Database.tasks || [];
// Sort the task by their `id` property, descending
Database.tasks.sort((p, n) => p.taskId + n.taskId);

//find 'tasks' div in the html
const tasksEl = document.getElementById("tasks")

//when the task save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function taskStore() {
    if (event.target.id === "taskForm__newButt") {
        document.getElementById("taskForm").classList.remove("hidden")
        document.getElementById("saveBtn").classList.remove("hidden")
    }
    if (event.target.id === "taskForm__saveButt") {
        // Create a new task object
        const newTask = tasksFactory(
            document.querySelector("input[name='taskForm__taskName']").value,
            document.querySelector("input[name='taskForm__completionDate']").value
        );
        Database.tasks.push(newTask);
        // Sort the task by their `id` property
        Database.tasks.sort((p, n) => p.taskId + n.taskId);
        db.save(Database);
        document.getElementById("taskForm").classList.add("hidden")
        document.getElementById("saveBtn").classList.add("hidden")
        document.forms["taskForm"].reset();
        taskDom()
    }
}

//run the message button save event above that saves to the Database (taskStore) when anything is clicked in the message div element
tasksEl.addEventListener("click", taskStore)