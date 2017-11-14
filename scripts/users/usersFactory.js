//Author: Paul Ellis; Purpose: function that creates new users
const idGenerator = require("../idGenerator");//get the idgenerator function
const db = require("../Database");//get the database object with methods
const Database = db.load();//use load method of database object to get local storage
let userIdGen = null;//set instance of idGenerator
Database.users = Database.users || [];//if Database.users doesn't exist, set to empty array

if (Database.users.length === 0) {userIdGen = idGenerator()}//if there are now users yet, use idGenerator normally
else {//if users array exists in storage....
    Database.users.sort((p,n) => n.userId - p.userId);//..sort users array to have highest id number at index 0
    console.log(Database.users[0])
    userIdGen = idGenerator(Database.users[0].userId);//set instance of id generator to be passed highest id number for it's starting number
}

const usersFactory = (name, email) => {
    let newUser =  Object.create(null, {//create new user object
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
    Database.users.push(newUser);//push new user into users array in Database
    db.save(Database, "users")//call save method of database object that pushes new db to local storage
    sessionStorage.setItem("currentUser", JSON.stringify(newUser.userId))//set session storage to new user's id

}

module.exports = usersFactory
