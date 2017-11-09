// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
<<<<<<< HEAD
const messagesFactory = require("./messagesFactory");
const userFactory = require("./usersFactory");
const eventsFactory = require("./eventsFactory");
const articleFactory = require("./articleFactory")
const tasksFactory = require("./tasksFactory")
=======
const messages = require("./messagesFactory");
const users = require("./usersCreator");
const events = require("./eventsFactory");
const articles = require("./articleFactory.js")
const tasks = require("./tasksFactory")
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
