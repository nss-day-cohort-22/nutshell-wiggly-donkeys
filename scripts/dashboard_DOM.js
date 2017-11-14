// //Author: Paul Ellis; Purpose: function that populates the dashboard

const db = require("./Database")
const innerDB = require("./innerHTML/innerDB")
<<<<<<< HEAD
const taskDom = require("./tasks/taskDom")
const articleDOM = require("./articles/articleDOM")
=======
const writeMessages = require("./messages/messagesPopulator")
>>>>>>> 649643164f09e8d3e593e7103f8b4897a0fed5ed


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