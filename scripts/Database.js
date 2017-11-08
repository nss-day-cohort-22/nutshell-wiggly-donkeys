// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const messagesFactory = require("./messagesFactory.js");
const usersFactory = require("./usersFactory.js");
const eventsFactory = require("./eventsFactory.js");
const articleFactory = require("./articleFactory.js")
const tasksFactory = require("./tasksFactory.js")

// Database
const Database = {
    "messages" : messages,
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : tasks,
    "connections" : connections,
}

// Serialize and store database
localStorage.setItem("Database", JSON.stringify(Database));

module.exports = Database

