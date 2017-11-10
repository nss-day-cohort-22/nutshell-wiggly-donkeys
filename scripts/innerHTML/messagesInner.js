//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for messages div

const messagesHTML = {
    "id":
    {
        enumerable: true,
        value: "messages"
    },
    "inner":
    {
        enumerable: true,
        value: `<!-- messages input -->
                <div id="messages">
                <div id="messageForm">
                <h2 id=messageForm_title>New Message</h2>
                <textarea id=messageForm_text rows="4" cols= "20"></textarea>
                <button id="messageForm_saveButt">Send</button>
                </div>
                <div id="messageOutput">
                </div>
                <div>`
    }
}



module.exports = messagesHTML;