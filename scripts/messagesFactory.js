//Author: MW - Purpose: create messages factory
const idGenerator = require("./idGenerator")

const messagesIdGenerator = idGenerator();

const messagesFactory = (message) => {
    return Object.create(null, {
        "messageId": {
            value: messagesIdGenerator.next().value,
            enumerable: true
        },
        "userID": {
            //insert function to pull from session storage
            value: userID,
            enumerable: true
        },
        "message": {
            value: message,
            enumerable: true
        }
    })
}

module.exports = messagesFactory()