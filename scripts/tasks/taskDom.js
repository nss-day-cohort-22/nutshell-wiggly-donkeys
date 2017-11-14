// //Author:Chase Steely
// //Purpose: To create a task and send it to database.
const db = require("../Database")

const writeTask = () => {
    const Database = db.load()
    Database.tasks = Database.tasks || [];
    const taskOut = document.getElementById("tasks__Post");
    taskOut.innerHTML = ""
    Database.tasks.forEach(t => {
        taskOut.innerHTML += `
    <article class="taskItem">
            <h2>${t.taskName}</h2>
            <h4>Expected Completion Date: ${t.completionDate}</h4>
            <input type="checkbox" id="markComplete" name="complete" value="completed">
            <label for="markComplete">Check if Complete.</label>
    </article>
    `
    })
}

module.exports = writeTask