// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
<<<<<<< HEAD
const messages = require("./messagesCreator");
const users = require("./usersCreator");
const events = require("./eventsFactory");
const articles = require("./articleFactory")
const tasks = require("./tasksFactory")
=======
const messages = require("./messages/messagesFactory");
const users = require("./users/usersCreator");
const events = require("./events/eventsFactory");
const articles = require("./articles/articleFactory")
const tasks = require("./tasks/tasksFactory")
>>>>>>> master

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