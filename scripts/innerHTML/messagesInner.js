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
        value: `
                <form id="messageForm" name="messageForm">
                        <h2 id=messageForm_title>New Message</h2>
                        <textarea id=messageForm_text rows="4" cols= "20"></textarea>
                    </form>
                    <button id="messageForm_saveButt">Send</button>
                    <div id="messageOutput">
                    </div>
               `
    }
}



module.exports = messagesHTML;