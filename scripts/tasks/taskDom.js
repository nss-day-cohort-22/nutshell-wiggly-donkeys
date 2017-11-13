// //Author:Chase Steely
// //Purpose: To create a task and send it to database.
// const Database = require("../Database")

// const taskEl = document.getElementById("tasks");

// const writeTask = (db) => {
//     db.forEach(t => {
//         taskEl.innerHTML += `
//     <article class="taskItem">
//             <h2>${t.name}</h2>
//             <h4>Expected Completion Date: ${t.completionDate}</h4>
//             <input type="checkbox" id="markComplete" name="complete" value="completed">
//             <label for="markComplete">Check if Complete.</label>
//     </article>
//     `
//     })
// }

// module.exports = writeTask