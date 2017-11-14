// Author: Paul Ellis; Purpose: Listen for change in browser storage
const db = require("./Database")

const update = () => {
    const Database = db.load();
    const changedKey = JSON.parse(localStorage.getItem("changedKey"));
    Database[changedKey].forEach(user => console.log(user))
}

const storageListener = () => {window.addEventListener("storage", update)};


module.exports = storageListener();