//Author: MW - Purpose: create messages factory
const idGenerator = require("../idGenerator")
// const Database = require("../Database");

const Database = JSON.parse(localStorage.getItem("Database"))

const messagesIdGenerator = idGenerator();

const messagesFactory = (message) => {
    return Object.create(null, {
        "messageId": {
            value: messagesIdGenerator.next().value,
            enumerable: true
        },
        "userId": {
            //insert function to pull from session storage
            value: Database.users.userId,
            enumerable: true
        },
        "message": {
            value: message,
            enumerable: true
        }
    })
}

module.exports = messagesFactory