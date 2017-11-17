// //Author:Chase Steely
// //Purpose: To create a task and send it to database.
const db = require("../Database")
const taskDelete = require("./taskDelete")
const taskEdit = require("./taskEdit")

const writeTask = () => {
        const Database = db.load()
        Database.tasks = Database.tasks || [];
        const taskOut = document.getElementById("tasks__Post");
        taskOut.innerHTML = ""
        const userID = JSON.parse(sessionStorage.getItem("currentUser"));
        const tasks = Database.tasks.filter(task => userID === task.userId);
        // .filter(task => task.completed.value === false);
        tasks.forEach(t => {
                if (t.completed === false) {
                        taskOut.innerHTML += `
    <article class="taskItem" id="task${t.taskId}">
            <h2 id="${t.taskName}" class="name" contenteditable="true">${t.taskName}</h2>
            <h4>Expected Completion Date: ${t.completionDate}</h4>
            <input type="checkbox" id="${t.taskId}" name="complete" value="completed">
            <label for="markComplete">Check if Complete.</label>
    </article>
    `

                }
        })
        taskOut.addEventListener("click", taskDelete)
        taskOut.addEventListener("keyup", taskEdit)

    }
    // db.save(Database);



module.exports = writeTask