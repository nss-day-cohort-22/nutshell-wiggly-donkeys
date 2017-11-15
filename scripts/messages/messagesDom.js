const db = require("../Database")

//pull the database from local storage


const writeMessages = () => {
    const Database = db.load()
    const messageOut = document.getElementById("messageOutput");
    messageOut.innerHTML = "";
    Database.messages = Database.messages || []
    Database.messages.forEach(messages => {
        const currentUser = Database.users.find(//finds the matching userId in the users table and assigns the matching user as an object in currentUser
            u => u.userId === messages.userId
        )
        //if the session's userId is the same as the messages, make the bubble align to the left, otherwise: right.
        let bubbleAlign = ""
        if (JSON.parse(sessionStorage.getItem("currentUser")) === messages.userId) {
            bubbleAlign = "left"
        } else {
            bubbleAlign = "right"
        }
        messageOut.innerHTML += `
        <div class="messageOut_container messageOut_${bubbleAlign}">
            <div class="messageOut_user">From: ${currentUser.username}</h4>
            <div class="messageOut_message">${messages.message}</p>
            <div class="messageOut_edit" id="messageOut_edit-${messages.messageId}">Edit</button>
        <div>`
    })
    //always keeps the scroll bar at the bottom on load and when new messages are added
    messageOut.scrollTop = messageOut.scrollHeight;
}

module.exports = writeMessages