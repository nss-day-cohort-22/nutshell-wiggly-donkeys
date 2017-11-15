// John Dulaney
// This fine piece of butchered code creates a factory for storing events in our nutshellDB
//┌(° ͜ʖ͡°)┘

//imports
const idGenerator = require("../idGenerator")
const db = require("../Database");
const Database = db.load()

//calling the idgenerator function
const eventsIdGenerator = idGenerator();

//factory for events
const eventsFactory = (name, date, location) => {
    return Object.create(null, {
        "id":{
            value: eventsIdGenerator.next().value,
            enumerable: true,
            writable: true
        },
        "userId":{
            value: JSON.parse(sessionStorage.getItem("currentUser")),
            enumerable: true,
            writable: true
        },
        "name":{
            value: name,
            enumerable: true,
            writable: true
        },
        "date":{
            value: date,
            enumerable: true,
            writable: true
        },
        "location":{
            value: location,
            enumerable: true,
            writable: true
            }
        }
    )
}

//exports
module.exports = eventsFactory