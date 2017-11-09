//Author: Paul Ellis; Purpose: create user database
const users = [];
usersDB = setusers => {
    if (localStorage.getItem("Database") === null) { return users }
}
module.exports = usersDB();