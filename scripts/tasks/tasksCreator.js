//Author:Chase Steely
//Purpose: To create a task and send it to database.

//the creator requires the taskFactory
const db = require("../Database")
const tasksFactory = require("./tasksFactory")
const taskDom = require("./taskDom")

//find 'tasks' div in the html
const tasksEl = document.getElementById("tasks")

//when the task save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function taskStore() {
    // Sort the task by their `id` property, descending
    const Database = db.load()
    Database.tasks = Database.tasks || [];
    Database.tasks.sort((p, n) => p.taskId + n.taskId);
    if (event.target.id === "taskForm__newButt") {
        document.getElementById("taskForm").classList.remove("hidden")
        document.getElementById("saveBtn").classList.remove("hidden")
    }
    if (event.target.id === "taskForm__saveButt") {
        // Getting the values of new tasks from form
        const newTask = tasksFactory(
            document.querySelector("input[name='taskForm__taskName']").value,
            document.querySelector("input[name='taskForm__completionDate']").value
        );
        //push the new message to the database
        Database.tasks.push(newTask);
        // Sort the task by their `id` property
        Database.tasks.sort((p, n) => p.taskId + n.taskId);
        db.save(Database, "tasks");
        //hide form and save button until new task button is clicked
        document.getElementById("taskForm").classList.add("hidden")
        document.getElementById("saveBtn").classList.add("hidden")
        //clear form
        document.forms["taskForm"].reset();
        //write new tasks to Dashboard
        taskDom()
    }
}

//run the message button save event above that saves to the Database (taskStore) when anything is clicked in the task div element
tasksEl.addEventListener("click", taskStore)