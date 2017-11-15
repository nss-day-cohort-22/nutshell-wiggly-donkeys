//Author: MW - Purpose:create creator
const db = require("../Database")
//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");
//require the writeMessages function from the messagesPopulator
const writeMessages = require("./messagesDom")
//requiring the edit function
// const edit = require("./messagesEdit")

//find 'message' div in the html
const messagesEl = document.getElementById("messages")

let editMode = false
let currentMessage = null

//run the edit function to take the stored message from the edit button that was clicked and put it in the text box
// edit()
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
    editMode = true
    }
)
//when the message save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function messageStore () {
    //pull the database from local storage
    const Database = db.load()
    Database.messages = Database.messages || [];//if Database.messages doesn't exist, set to empty array
    //  Initially Sort the task by their `id` property //
    Database.messages.sort((p, n) => p.messageId - n.messageId)


    if (event.target.id === "messageForm_saveButt") {

        console.log(editMode)
        //when in edit mode, find the message you are currently editing and save it to that message object in the database.
        if (editMode === true) {

            // Find the index of the selected message
            const messageIndex = Database.messages.findIndex(
                messages => messages.messageId === currentMessage.messageId
            )
            console.log(Database.messages[messageIndex].messageId)
            // Update the message object at the matching index
            Database.messages[messageIndex] = messagesFactory(
                //insert old messageId
                Database.messages[messageIndex].messageId,
                document.getElementById("messageForm_text").value)

            editMode = false
            db.save(Database, "messages");
            document.forms["messageForm"].reset();
            writeMessages();
            }
        //when not in edit mode, save the message as usual
        else {
            const newMessage = messagesFactory(
                document.getElementById("messageForm_text").value
            );
            Database.messages.push(newMessage);
            // ReSort the task by their `id` property //
            Database.messages.sort((p, n) => p.messageId - n.messageId);
            db.save(Database, "messages");
            document.forms["messageForm"].reset();
            writeMessages();
        }
    }
}

//run the message button save event above that saves to the Database (messageStore) when anything is clicked in the message div element
messagesEl.addEventListener("click", messageStore)