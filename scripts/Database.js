// Authors : Chase, John, Max, and Paul
// Purpose : Nutshell's Database

//imports - Add as we go boys

const users = require("./users/usersCreator");
const innerDB = require("./innerHTML/innerDB")
const connections = require("./connections/connectionsCreator")


// Database
let Database = {
    "messages" : messages,
    "users" : users,
    "events" : events,
    "articles" : articles,
    "tasks" : [],
    "innerDB": innerDB,
    "connections" : connections
}

// Serialize and store database
localStorage.setItem("Database", JSON.stringify(Database));

module.exports = Database

