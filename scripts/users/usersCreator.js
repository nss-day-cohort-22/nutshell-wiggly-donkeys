//Author: Paul Ellis; Purpose: create user database
const makeUsers = require("./usersFactory");
const Database = JSON.parse(localStorage.getItem("Database"))
let usersDB = users => {
    if (Database === null) {
        const usersInit = [];
        usersInit.push(makeUsers("Paul", "paul@nuts.com"));
        usersInit.push(makeUsers("John", "john@nuts.com"));
        usersInit.push(makeUsers("Max", "max@nuts.com"));
        usersInit.push(makeUsers("Chase", "chase@nuts.com"));
        return usersInit
        } else {return Database.users}
}

module.exports = usersDB();