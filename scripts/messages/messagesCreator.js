//Author: MW - Purpose:create creator



//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");
<<<<<<< HEAD:scripts/messagesCreator.js

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))
=======
const Database = require("../Database.js");
>>>>>>> master:scripts/messages/messagesCreator.js

Database.messages = Database.messages || [];

//  Initially Sort the task by their `id` property
Database.messages.sort((p, n) => p.messageId + n.messageId);

// Add click event listener to the message button
const messageButtonEl = document.getElementById("messageForm__saveButton").addEventListener("click", event => {

   // Create a new article object
    const newMessage = messagesFactory(
        document.querySelector("input[name='messageForm__message']").value
    );

    //****clear textarea???****//
    // function eraseText() {
    //     document.getElementById("messageForm_text").value = "";
    // }

    // // Add new task to array
    Database.messages.push(newMessage);

    // // ReSort the task by their `id` property
    Database.messages.sort((p, n) => p.messageId + n.messageId);

})

// const Database = JSON.parse(localStorage.getItem("Database"))
// let messagesDb = messages => {
//     if (Database === null) {
//         const messagesInit = [];
//         return messagesInit
//         } else {return Database.messages}
// }

module.exports = messagesDb();


