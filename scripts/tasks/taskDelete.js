//Author: Chase Steely
//Purpose: To hide task from dom when the checkbox is selected
//and mark the selected div completed in database
const db = require("../Database")

const deleteTask = event => {
    const Database = db.load()
    Database.tasks = Database.tasks || [];
    const checkId = event.target.id
    if (event.target.type === "checkbox") {
        const taskChecked = Database.tasks.find(task => parseInt(checkId) === task.taskId);
        taskChecked.completed = true;
        db.save(Database, "tasks");
        console.log(taskChecked)
        document.getElementById("task" + checkId).classList.add("hidden")
    }
}

module.exports = deleteTask