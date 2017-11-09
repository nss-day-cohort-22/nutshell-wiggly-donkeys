// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
const messagesFactory = require("./messagesFactory");
const userFactory = require("./usersFactory");
const eventsFactory = require("./eventsFactory");
const articleFactory = require("./articleFactory")
const tasksFactory = require("./tasksFactory")

// Database
const Database = {
    "messages" : messages,
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : tasks,
    "connections" : connections,
}
