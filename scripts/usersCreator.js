//Author: Paul Ellis; Purpose: create user database
const makeUsers = require("./usersFactory");

const usersDB = [];
usersDB.push(makeUsers("Paul", "paul@nuts.com"));
usersDB.push(makeUsers("John", "john@nuts.com"));
usersDB.push(makeUsers("Max", "max@nuts.com"));
usersDB.push(makeUsers("Chase", "chase@nuts.com"));

module.exports = usersDB;