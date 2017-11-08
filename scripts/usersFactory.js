//Author: Paul Ellis; Purpose: create user database
const idGenerator = require("./idGenerator");
const userIdGen = idGenerator();

const usersFactory = function(name, email) {
    Object.create(null, {
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
    }


module.exports = usersFactory()