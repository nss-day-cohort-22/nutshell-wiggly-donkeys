// John Dulaney
// This fine piece of butchered code creates a factory for storing articles in our nutshellDB

//imports
const idGenerator = require("../idGenerator")
const Database = require("../Database");

//calling the idgenerator function
const articleIdGenerator = idGenerator();

//factory for Articles
const articles = (url, note, date) => {
    return Object.create(null, {
        "id":{
            value: articleIdGenerator.next().value,
            enumerable: true,
            writable: true
        },
        "userId":{
<<<<<<< HEAD:scripts/articleFactory.js
            value: Database.users[userId],  //function coming soon
            enumerable: true
=======
            value: Database.users[userId], 
            enumerable: true,
            writable: true
>>>>>>> master:scripts/articles/articleFactory.js
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
            value: Date.now(),
            enumerable: true,
            writable: true
            }
        }
    )
}

//exports
module.exports = articles