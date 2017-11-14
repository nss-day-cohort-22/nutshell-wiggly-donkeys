// John Dulaney
// This fine piece of butchered code creates a factory for storing articles in our nutshellDB
//┌(° ͜ʖ͡°)┘

//imports
const idGenerator = require("../idGenerator")
const db = require("../Database");
const Database = db.load()


//calling the idgenerator function
const articleIdGenerator = idGenerator();

//factory for Articles
const articlesFactory = (url, note, date) => {
    return Object.create(null, {
        "id":{
            value: articleIdGenerator.next().value,
            enumerable: true,
            writable: true
        },
        "userId": {
            value: JSON.parse(sessionStorage.getItem("currentUser")),
            enumerable: true,
            writable: true
        },
        "url":{
            value: url,
            enumerable: true,
            writable: true
        },
        "note":{
            value: note,
            enumerable: true,
            writable: true
        },
        "date":{
            value: date,
            enumerable: true,
            writable: true
            }
        }
    )
}

//exports
module.exports = articlesFactory