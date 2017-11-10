//Author: MW - Purpose:create creator

//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");
const Database = require("../Database.js");

Database.messages = Database.messages || [];

//  Initially Sort the task by their `id` property
Database.messages.sort((p, n) => p.messageId + n.messageId);

// Add click event listener to the message button
const messageButtonEl = document.getElementById("messageForm__saveButton").addEventListener("click", event => {

   // Create a new article object
    const newMessage = messagesFactory(
        document.querySelector("input[name='messageForm__message']").value
    );
    // Add new task to array
    Database.messages.push(newMessage);

    // ReSort the task by their `id` property
    Database.messages.sort((p, n) => p.messageId + n.messageId);

})