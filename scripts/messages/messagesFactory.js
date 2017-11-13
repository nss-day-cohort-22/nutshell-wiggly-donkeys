//Author: MW - Purpose: create messages factory
const idGenerator = require("../idGenerator")
const Database = require("../Database");

const messagesIdGenerator = idGenerator();

const messagesFactory = (message) => {
    return Object.create(null, {
        "messageId": {
            value: messagesIdGenerator.next().value,
            enumerable: true
        },
        "userId": {
            value: JSON.parse(sessionStorage.getItem("currentUser")),
            enumerable: true
        },
        "message": {
            value: message,
            enumerable: true
        }
    })
}

module.exports = messagesFactory