const db = require("../Database");
const dashboardDOM = require("../dashboard_DOM")
const Database = db.load();

const userLogin = () => {
    document.getElementById("regForm_login").addEventListener("click", login => {
        const regUsername = document.getElementById("regForm_username").value;//get value of username field
        const regEmail = document.getElementById("regForm_email").value;//get value of email field
        let match = false;
        if (Database.users !== undefined) {
        Database.users.forEach(user => {
            if (user.username === regUsername && user.email === regEmail) {
                match = true;
                sessionStorage.setItem("currentUser", JSON.stringify(user.userId))//set session storage to new user
                document.getElementById("regForm").classList.remove("d-flex")
                document.getElementById("regForm").classList.add("hidden")
                dashboardDOM();
            }
        })
    } else {match = true; alert("Congrats! You're our first user. Please register.")};
        if (match === false) {alert("I'm sorry, your info doesn't quit match.  Please re-enter or register a new account.")}
    })
}

module.exports = userLogin()