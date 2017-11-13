// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const users = require("./users/usersCreator");
const events = require("./events/eventsFactory");
const articles = require("./articles/articleFactory");
const tasks = require("./tasks/tasksFactory");
const innerDB = require("./innerHTML/innerDB")
const connections = require("./connections/connectionsCreator")


// Database
const Database = {
    "messages" : [],
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : tasks,
    "innerDB": innerDB,
    "connections" : connections
}
console.log(Database)

localStorage.setItem("Database", JSON.stringify(Database))

module.exports = Database