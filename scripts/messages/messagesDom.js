const db = require("../Database")

//pull the database from local storage


const writeMessages = (username) => {
    const Database = db.load()
    const messageOut = document.getElementById("messageOutput");
    messageOut.innerHTML = "";
    Database.messages = Database.messages || []
    Database.messages.forEach(messages => {
        const currentUser = Database.users.find(//finds the matching userId in the users table and assigns the matching user as an object in currentUser
            u => u.userId === messages.userId
        )
        console.log(currentUser)
        messageOut.innerHTML += `
        <div>
            <h4 class="messageOut_user">User: ${currentUser.username}</h4>
            <p>${messages.message}</p>
            <button class="messageOut_edit" id="messageOut_edit-${messages.messageId}">Edit</button>
        <div>`
    })
}

module.exports = writeMessages