//Author: Paul Ellis; Purpose: event listener for registration form: make a new user object if one doesn't already exist.
const db = require("../Database")
const usersFactory = require("./usersFactory");//pull function that creates users
// const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
const dashboardDOM = require("../dashboard_DOM");
const Database = db.load();

const usersCreator = register => {
    document.getElementById("regForm_saveButt").addEventListener("click", registration => {//when a user clicks save on registration form
        const regUsername = document.getElementById("regForm_username").value;//get value of username field
        const regEmail = document.getElementById("regForm_email").value;//get value of email field
        let nonExistant = true;//boolean for if user or email don't already exist
        if (Database.users !== undefined) {
            Database.users.forEach(user => {//go through array of users
                if (user.username === regUsername) {//check to see if username already exists
                    nonExistant = false;//if so set to false
                    alert("I'm sorry, that username already exists. Please enter a new user name.");//and inform user
                } else if (user.email === regEmail) {//check to see if email already exists
                    nonExistant = false;//if so set to false
                    alert("I'm sorry, that email already exists. Please enter a new email.");//and inform user
                };
            })
        }
        if (nonExistant) {//if name and email don't exist
            usersFactory(regUsername, regEmail);//make new user object
            document.getElementById("regForm").classList.remove("d-flex")
            document.getElementById("regForm").classList.add("hidden")
            dashboardDOM();
        }
    })
}

module.exports = usersCreator();
