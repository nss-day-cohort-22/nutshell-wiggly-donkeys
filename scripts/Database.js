// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const messages = require("./messagesCreator");
const users = require("./usersCreator");
const events = require("./eventsFactory");
const articles = require("./articleFactory")
const tasks = require("./tasksFactory")

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