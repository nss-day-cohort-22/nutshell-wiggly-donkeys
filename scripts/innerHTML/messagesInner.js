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
        <section class="container">        
                <form id="messageForm" name="messageForm">
                        <h2 id=messageForm_title>New Message</h2>
                        <textarea id=messageForm_text rows="3" cols= "60"></textarea>
                    </form>
                    <button id="messageForm_saveButt">Send</button>
                    <div id="messageOutput">
                    </div>
                    </section>
               `
    }
}



module.exports = messagesHTML;