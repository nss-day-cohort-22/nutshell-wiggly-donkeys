//Author: Paul Ellis; Purpose: function to create new connection

const Database = require("../Database");
const idGenerator = require("../idGenerator");

const connectionIdGen = idGenerator();

const connectionFactory = (user, friend) => {
    return Object.create(null, {
        "connectionId":
        {
            enumerable: true,
            value: connectionIdGen.next().value
        },
        "user":
        {
            enumerable: true,
            value: user
        },
        "friend":
        {
            enumerable: true,
            value: friend
        }
    })
}

module.exports = connectionFactory