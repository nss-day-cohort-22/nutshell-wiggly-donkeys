//Author: MW - Purpose: create messages factory
<<<<<<< HEAD:scripts/messagesFactory.js
const idGenerator = require("./idGenerator")
const Database = require("./Database")
=======
const idGenerator = require("../idGenerator")
const Database = require("../Database");
>>>>>>> master:scripts/messages/messagesFactory.js

const messagesIdGenerator = idGenerator();

const messagesFactory = (message) => {
    return Object.create(null, {
        "messageId": {
            value: messagesIdGenerator.next().value,
            enumerable: true
        },
<<<<<<< HEAD:scripts/messagesFactory.js
        "userID": {
            value: Database.users[userId],
=======
        "userId": {
            //insert function to pull from session storage
            value: Database.users.userId,
>>>>>>> master:scripts/messages/messagesFactory.js
            enumerable: true
        },
        "message": {
            value: message,
            enumerable: true
        }
    })
}

module.exports = messagesFactory