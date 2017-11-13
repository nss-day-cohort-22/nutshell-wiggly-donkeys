//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for tasks div

const tasksHTML = {
    "id": {
        enumerable: true,
        value: "tasks"
    },
    "inner": {
        enumerable: true,
        value: `   <div class="button">
        <button id="taskForm__newButt">New Task</button>
    </div>
    <form id="taskForm" name="taskForm" class="taskForm hidden">
        <div>
            <label for="taskForm__taskName">Name:</label>
            <input type="text" id="taskForm__taskName" name="taskForm__taskName">
        </div>
        <div>
            <label for="taskForm__completionDate">Expected Completion Date (mm/dd/yy)</label>
            <input type="text" id="taskForm__completionDate" name="taskForm__completionDate">
        </div>
        </form>
        <div id="saveBtn" class="button hidden">
            <button id="taskForm__saveButt">Save Task</button>
        </div>
        <section id="tasks__Post" class="taskOutput">
        <h1>TASK LIST</h1>
        </section>
        `
    }
}

module.exports = tasksHTML;