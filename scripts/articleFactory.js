// John Dulaney
// This fine piece of butchered code creates a factory for storing articles in our nutshellDB

//imports
const idGenerator = require("./idGenerator")

//calling the idgenerator function
const articleIdGenerator = idGenerator();

//factory for Articles
const articleFactory = (userId, url, note, date) => {
    return Object.create(null, {
        "id":{
            value: articleIdGenerator.next().value,
            enumerable: true
        },
        "userId":{
            value: userId,  //function coming soon
            enumerable: true
        },
        "url":{
            value: url,
            enumerable: true
        },
        "note":{
            value: note,
            enumerable: true
        },
        "date":{
            value: Date.now(),
            enumerable: true
            }
        }
    )
}

//exports
module.exports = articleFactory 