

const taskEl = document.getElementById("tasks")

const newTask = () => {
    taskEl.innerHTML = `
    
    `
}

taskEl.innerHTML = `
<form class="taskFrom">
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
