//Author: Paul Ellis; Purpose: event listener for registration form: make a new user object if one doesn't already exist.

const userMaker = require("./usersObjectCreate");//pull function that creates users
const storageDatabase = JSON.parse(localStorage.getItem("Database"))//access the main database

const usersCreator = register => {
    document.getElementById("regForm_saveButt").addEventListener("click", registration => {//when a user clicks save on registration form
        const regUsername = document.getElementById("regForm_username").value;//get value of username field
        const regEmail = document.getElementById("regForm_email").value;//get value of email field
        let nonExistant = true;//boolean for if user or email don't already exist
        storageDatabase.users.forEach(user => {//go through array of users
            if (user.username === regUsername) {//check to see if username already exists
                nonExistant = false;//if so set to false
                alert("I'm sorry, that username already exists. Please enter a new user name.");//and inform user
            } else if (user.email === regEmail) {//check to see if email already exists
                nonExistant = false;//if so set to false
                alert("I'm sorry, that email already exists. Please enter a new email.");//and inform user
            };
        })
        if (nonExistant) {//if name and email don't exist
            const newUser = userMaker(regUsername, regEmail);//make new user object
            storageDatabase.users.push(newUser);//add new user object to users array in local storage pull
            localStorage.setItem("Database", JSON.stringify(storageDatabase))//send new storage back to local
            sessionStorage.setItem("currentUser", JSON.stringify(newUser))//set session storage to new user
            //hide form and populate dashboard
        }
    })
}

module.exports = usersCreator();
