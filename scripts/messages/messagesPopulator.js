const messagesCreator = require("./messagesCreator")
const messagesEl = require("./messagesCreator")

//pull the database from local storage

let newMessages = "";


messagesEl.addEventListener("click", event => {
    if (event.target.id === "messageForm_saveButt") {
        const Database = JSON.parse(localStorage.getItem("Database"))
        Database.messages.forEach(messages => {
            newMessages = `
            <div>
                <p>User: ${messages.userId}</p>
                <p>${messages.message}</p>
            <div>`
        })
        document.getElementById("messageOutput").innerHTML += newMessages;
        }
})