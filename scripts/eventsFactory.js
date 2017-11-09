// John Dulaney
// This fine piece of butchered code creates a factory for storing events in our nutshellDB

//imports
const idGenerator = require("./idGenerator")
const Database = require("./Database");


//calling the idgenerator function
const eventsIdGenerator = idGenerator();

//factory for eventss
const eventsFactory = (name, date, location) => {
    return Object.create(null, {
        "id":{
            value: eventsIdGenerator.next().value,
            enumerable: true
        },
        "userId":{
            value: Database.users[userId],  //function coming soon
            enumerable: true
        },
        "name":{
            value: name,
            enumerable: true
        },
        "date":{
            value: date,
            enumerable: true
        },
        "location":{
            value: location,
            enumerable: true
            }
        }
    )
}

//exports
module.exports = eventsFactory