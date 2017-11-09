//Author:Chase Steely
//Purpose: Writing task form to dom.
const taskEl = document.getElementById("tasks")

const newTask = () => {
   taskEl.innerHTML += `
    <div class="button">
        <button id="taskForm__newButt">New Task</button>
    </div>
    <form id="taskForm" class="taskForm">
        <div>
            <label for="taskForm__taskName">Name:</label>
            <input type="text" id="taskForm__taskName" name="taskForm__taskName">
        </div>
        <div>
            <label for="taskForm__completionDate">Expected Completion Date</label>
            <input type="datetime" name="taskForm__completionDate" id="taskForm__completionDate">
        </div>
        <div class="button">
            <button id="taskForm__saveButt">Save Task</button>
        </div>
    </form>
    `
}

module.exports = newTask
