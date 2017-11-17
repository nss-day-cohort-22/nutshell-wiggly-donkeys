//Author: MW - Purpose: create messages factory
const idGenerator = require("../idGenerator")
const db = require("../Database");
let messagesIdGenerator = null;

const messagesFactory = (id, message) => {
    const Database = db.load();//use load method of database object to get local storage
    Database.messages = Database.messages || [];//if Database.users doesn't exist, set to empty array
    if (Database.messages.length === 0) {messagesIdGenerator = idGenerator()}//if there are now users yet, use idGenerator normally
    else {//if messages array exists in storage....
        Database.messages.sort((p, n) => n.messageId - p.messageId);//..sort users array to have highest id number at index 0
        messagesIdGenerator = idGenerator(Database.messages[0].messageId);//set instance of id generator to be passed highest id number for it's starting number
    }
    return Object.create(null, {
        "messageId": {
            value: (id === null) ? messagesIdGenerator.next().value : id,
            // value: messagesIdGenerator.next().value,
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