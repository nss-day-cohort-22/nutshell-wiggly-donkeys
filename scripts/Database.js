// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const users = require("./users/usersCreator");
const events = require("./events/eventsFactory");
const articles = require("./articles/articleFactory")
const tasks = require("./tasks/tasksFactory")

// Database
const Database = {
    "messages" : [],
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : tasks,
    // "connections" : connections
}
console.log(Database)

localStorage.setItem("Database", JSON.stringify(Database))

module.exports = Database