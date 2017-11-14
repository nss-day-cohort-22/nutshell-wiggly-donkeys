// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys
// const messages = require("./messages/messagesFactory");
// const users = require("./users/usersCreator");
// const events = require("./events/eventsFactory");
// const articles = require("./articles/articleFactory");
// const tasks = require("./tasks/tasksFactory");
// const innerDB = require("./innerHTML/innerDB")
// const connections = require("./connections/connectionsCreator")


// // Database
// const Database = {
//     "messages" : messages,
//     "users" : users,
//     "events" : events,
//     "articles" : articles,
//     "tasks" : tasks,
//     "innerDB": innerDB,
//     "connections" : connections
// }

// // Serialize and store database
// localStorage.setItem("Database", JSON.stringify(Database));

const Database = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Database")) || {}
    },
    save: {
        value: db => localStorage.setItem("Database", JSON.stringify(db))
    }
})

module.exports = Database

