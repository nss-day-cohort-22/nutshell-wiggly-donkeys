// John Dulaney
// This is a work in progress innerhtml file. DEPRECATED
//┌(° ͜ʖ͡°)┘

const taskEl = document.getElementById("tasks")

const newTask = () => {
   taskEl.innerHTML += `
    <div class="button">
        <button id="taskForm__newButt">New Task</button>
        </div>
        <form name="article__form">
            <label>Date</label>
                <input type="date" name='articleForm__date' id="" value="Date">
            <label>URL</label>
                <input type="text" name='articleForm__url' value="URL">
            <label>Note</label>
                <textarea name="'articleForm__note'" id="note" name="Notes" cols="30" rows="10"></textarea>
            <label>Post</label>
                <input type="button" id="articleForm__saveButt" class="article__button" value="Post Article">
        </form>
    `
}

module.exports = newTask





