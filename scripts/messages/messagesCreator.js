//Author: MW - Purpose:create creator


//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))

Database.messages = Database.messages || [];


const messagesEl = document.getElementById("messages")



function messageButt () {
    if (event.target.id === "messageForm_saveButt") {
        console.log("hello!")
        const newMessage = messagesFactory(
            document.getElementById("messageForm_text").value
        );
        Database.messages.push(newMessage);
    }
}

function messageListen () {
    messagesEl.addEventListener("click", messageButt)
}

messageListen();

localStorage.setItem("Database", JSON.stringify(Database));

module.exports = Database.messages


