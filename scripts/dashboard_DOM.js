// //Author: Paul Ellis; Purpose: function that populates the dashboard

const db = require("./Database")
const Database = db.load();
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user
const taskDom = require("./tasks/taskDom")
const innerDB = require("./innerHTML/innerDB")
const writeMessages = require("./messages/messagesPopulator")

const populateDOM = DOM => {
    innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;
    })
    taskDom()
    writeMessages()
}

module.exports = populateDOM