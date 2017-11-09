//Author:Chase Steely
//Purpose: Writing task form to dom.
const taskEl = document.getElementById("tasks")

const newTask = () => {
    `
    <div class="button">
        <button id="taskForm__saveButt">New Task</button>
    </div>
    <form class="taskFrom hidden">
        <div>
            <label for="taskForm__taskName">Name:</label>
            <input type="text" id="taskForm__taskName" name="taskForm__taskName">
        </div>
        <div>
            <label for="taskForm__completionDate">Expected Completion Date (mm/dd/yy)</label>
            <input type="text" id="taskForm__completionDate" name="taskForm__completionDate">
        </div>
        <div class="button">
            <button id="taskForm__saveButt">Save Task</button>
        </div>
    </form>
    `
}

module.exports = newTask