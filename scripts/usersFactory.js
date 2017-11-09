//Author: Paul Ellis; Purpose: function that creates new users

const idGenerator = require("./idGenerator");
const userIdGen = idGenerator();

const usersFactory = (name, email) => {
    return Object.create(null, {
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

<<<<<<< HEAD
module.exports = usersFactory();
=======
module.exports = usersFactory
>>>>>>> master
