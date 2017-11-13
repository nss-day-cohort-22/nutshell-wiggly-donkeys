// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const messages = require("./messages/messagesFactory");
const users = require("./users/usersCreator");
const events = require("./events/eventsFactory");
const articles = require("./articles/articleFactory");
const tasks = require("./tasks/tasksFactory");
const innerDB = require("./innerHTML/innerDB")
const connections = require("./connections/connectionsCreator")


// Database
let Database = {
    "messages" : messages,
    "users" : users,
    "events" : events,
    "articles" : [],
    "tasks" : tasks,
    "innerDB": innerDB,
    "connections" : connections
}

// Serialize and store database
localStorage.setItem("Database", JSON.stringify(Database));

module.exports = Database

