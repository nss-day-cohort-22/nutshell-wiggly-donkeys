// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const messages = require("./messagesFactory.js");
const users = require("./usersFactory.js");
const events = require("./eventsFactory.js");
const articles = require("./articleFactory.js")
const tasks = require("./tasksFactory.js")

// Database
const Database = {
    "messages" : messages,
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : tasks,
    // "connections" : connections
}

// Serialize and store database
localStorage.setItem("Database", JSON.stringify(Database));

module.exports = Database

