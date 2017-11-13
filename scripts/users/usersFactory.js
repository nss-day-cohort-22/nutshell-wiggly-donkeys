//Author: Paul Ellis; Purpose: function that creates new users
const idGenerator = require("../idGenerator");
const userIdGen = idGenerator();
const db = require("../Database")
const Database = db.load();
Database.users = Database.users || [];

const usersFactory = (name, email) => {
    let newUser =  Object.create(null, {
        "userId":
        {
            enumerable: true,
            value: userIdGen.next().value
        },
        "username":
        {
            enumerable: true,
            value: name
        },
        "email":
        {
            enumerable: true,
            value: email
        }
    })
    Database.users.push(newUser);
    console.log(Database)
    db.save(Database)
    window.sessionStorage.setItem("currentUser", JSON.stringify(newUser.userId))

}

module.exports = usersFactory
