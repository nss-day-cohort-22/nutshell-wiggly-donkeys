const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user
const connectionsFactory = require("./connectionsFactory");

const connectionsDB = connections => {
    if (Database === null) {
        const connectionsInit = [];
        return connectionsInit;
        } else {return Database.connections}
}

module.exports = connectionsDB();