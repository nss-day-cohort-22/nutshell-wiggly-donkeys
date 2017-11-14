// //Author: Paul Ellis; Purpose: function that populates the dashboard

const db = require("./Database")
const innerDB = require("./innerHTML/innerDB")
const articleDOM = require("./articles/articleDOM")
const taskDom = require("./tasks/taskDom")
const writeMessages = require("./messages/messagesPopulator")


const populateDOM = DOM => {
    const Database = db.load();
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user
    innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;
    })
    articleDOM()
    taskDom()
    writeMessages()
}

module.exports = populateDOM