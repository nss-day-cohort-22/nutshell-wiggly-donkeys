//Author: Chase Steely
//Purpose: To hide task from dom when the checkbox is selected
//and mark the selected div completed in database
const db = require("../Database")

const editTask = event => {
    const Database = db.load()
    Database.tasks = Database.tasks || [];
    const taskClicked = event.target.id
    let text = event.target.innerHTML
    const taskSelected = Database.tasks.find(task => taskClicked === task.taskName);
    // let code = (event.keyCode ?event.keyCode : event.which);
    if (event.keyCode === 13) { //Enter keycode
        event.preventDefault()
        event.target.blur()
        taskSelected.taskName = text
        db.save(Database, "tasks");
    }
}

module.exports = editTask