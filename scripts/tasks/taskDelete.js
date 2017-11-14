
const deleteTask = event => {
    // const taskEl = document.getElementById("tasks__Post");
    const checkId = event.target.id
    if (event.target.type === "checkbox") {
        document.getElementById("task" + checkId).classList.add("hidden")
    }
}

module.exports = deleteTask