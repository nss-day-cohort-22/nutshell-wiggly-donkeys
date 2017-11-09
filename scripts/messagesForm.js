const addMessageForm = function () {

    messageEl = document.getElementById("messages");

    messageEl.innerHTML += `
        <div id="messageForm">
            <h2 id=messageForm_title>New Message</h2>
            <textarea id=messageForm_text rows="4" cols= "20"></textarea>
            <button id="messageForm_saveButt">Send</button>
        </div>
        <div id="messageOutput">
        </div>`
}

module.exports = addMessageForm