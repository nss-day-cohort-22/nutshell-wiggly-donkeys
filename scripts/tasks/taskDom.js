// //Author:Chase Steely
// //Purpose: To create a task and send it to database.
const db = require("../Database")
const taskDelete = require("./taskDelete")

const writeTask = () => {
    const Database = db.load()
    Database.tasks = Database.tasks || [];
    const taskOut = document.getElementById("tasks__Post");
    taskOut.innerHTML = ""
    Database.tasks.forEach(t => {
        taskOut.innerHTML += `
    <article class="taskItem" id="task${t.taskId}">
            <h2>${t.taskName}</h2>
            <h4>Expected Completion Date: ${t.completionDate}</h4>
            <input type="checkbox" id="${t.taskId}" name="complete" value="completed">
            <label for="markComplete">Check if Complete.</label>
    </article>
    `
})
taskOut.addEventListener("click", taskDelete)
}

module.exports = writeTask