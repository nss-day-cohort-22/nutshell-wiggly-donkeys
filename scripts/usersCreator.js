//Author: Paul Ellis; Purpose: event listener for registration form: make a new user object if one doesn't already exist.

const userMaker = require("./usersObjectCreate");//pull function that creates users
const storageDatabase = JSON.parse(localStorage.getItem("Database"))//access the main database
const testUser = userMaker("test", "test")
const usersCreator = register => {
    document.getElementById("regForm_saveButt").addEventListener("click", registration => {//when a user clicks save on registration form
        const regUsername = document.getElementById("regForm_username").value;//get value of username field
        const regEmail = document.getElementById("regForm_email").value;//get value of email field
        if (storageDatabase.users.length === 0) {
            const newUser = userMaker(regUsername, regEmail);
            storageDatabase.users.push(newUser);
            localStorage.setItem("Database", JSON.stringify(storageDatabase))
            sessionStorage.setItem("currentUser", JSON.stringify(newUser))
        }
        else {
            storageDatabase.users.forEach(user => {//go through array of users
                if (user.username === regUsername) {//check to see if username already exists
                    alert("I'm sorry, that username already exists. Please enter a new user name.");
                } else if (user.email === regEmail) {//check to see if email already exists
                    alert("I'm sorry, that email already exists. Please enter a new email.");
                } else {
                    const newUser = userMaker(regUsername, regEmail);
                    storageDatabase.users.push(newUser);
                    localStorage.setItem("Database", JSON.stringify(storageDatabase))
                    sessionStorage.setItem("currentUser", JSON.stringify(newUser))
                }
            })
        }
    })
}

module.exports = usersCreator();
