// Author: Paul Ellis; Purpose: Listen for change in browser storage
const db = require("./Database")
const writeMessages = require("./messages/messagesDom")

const update = () => {
    const Database = db.load();
    const changedKey = JSON.parse(localStorage.getItem("changedKey"));
    if (changedKey === "messages") {
        writeMessages();
    }
}

const storageListener = () => {window.addEventListener("storage", update)};


module.exports = storageListener();