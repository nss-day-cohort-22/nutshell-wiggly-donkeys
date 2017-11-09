const Database = JSON.parse(localStorage.getItem("Database"))//access the main database

const userLogin = () => {
    document.getElementById("regForm_login").addEventListener("click", login => {
        const regUsername = document.getElementById("regForm_username").value;//get value of username field
        const regEmail = document.getElementById("regForm_email").value;//get value of email field
        let match = false;
        Database.users.forEach(user => {
            if (user.username === regUsername && user.email === regEmail) {
                match = true;
                sessionStorage.setItem("currentUser", JSON.stringify(user.userId))//set session storage to new user
                document.getElementById("regForm").classList.remove("d-flex")
                document.getElementById("regForm").classList.add("hidden")
                //insert populate function
            }
        })
        if (match === false) {alert("I'm sorry, your info doesn't quit match.  Please re-enter or register a new account.")}
    })
}

module.exports = userLogin()