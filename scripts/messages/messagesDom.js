const db = require("../Database")

//pull the database from local storage


const writeMessages = (username) => {
    const Database = db.load()
    const messageOut = document.getElementById("messageOutput");
    messageOut.innerHTML = "";
    Database.messages = Database.messages || []
    Database.messages.forEach(messages => {
        const currentUser = Database.users.find(
            u => u.userId === messages.userId
        )
        console.log(currentUser)
        messageOut.innerHTML += `
        <div>
            <p class="messageOut_user">User: ${currentUser.username}</p>
            <p>${messages.message}</p>
        <div>`
    })
}

module.exports = writeMessages