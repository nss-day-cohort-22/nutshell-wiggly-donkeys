//Author: Paul Ellis; Purpose: function to create new connection

const idGenerator = require("../idGenerator");//get the idgenerator function
const db = require("../Database");//get the database object with methods
let connectionIdGen = idGenerator();//set instance of idGenerator

const connectionFactory = (user, friend) => {
    const Database = db.load();//use load method of database object to get local storage
    Database.connections = Database.connections || [];//if Database.connections doesn't exist, set to empty array
    if (Database.connections.length === 0) {connectionIdGen = idGenerator()}//if there are now connections yet, use idGenerator normally
    else {//if connections array exists in storage....
        Database.connections.sort((p,n) => n.connectionId - p.connectionId);//..sort connections array to have highest id number at index 0
        connectionIdGen = idGenerator(Database.connections[0].connectionId);//set instance of id generator to be passed highest id number for it's starting number
    }
    let newConnection =  Object.create(null, {
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
    Database.connections.push(newConnection);
    db.save(Database, "connections");
}

module.exports = connectionFactory