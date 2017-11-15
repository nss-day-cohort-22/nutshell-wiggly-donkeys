const db = require("../Database")



// When user clicks on any edit hyperlink
function edit () {
    let editMode = false
    let currentMessage = null
    document.getElementById("messages").addEventListener(
        "click", e => {
            if (e.target.id.startsWith("messageOut_edit")) {
                console.log("CLICKED EDIT")
                // Get the database from local storage, or empty object if null
                const Database = db.load();
                // Which article did user click on?
                currentMessage = Database.messages.find(
                    m => m.messageId === parseInt(e.target.id.split("-")[1])
                )
                // Put values in the article form
                document.getElementById("messageForm_text").value = currentMessage.message

                editMode = true
            }
        }
    )
}

module.exports = edit