// //Author: Paul Ellis; Purpose: function that populates the dashboard

const db = require("./Database")
const Database = db.load();
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user
const articleDOM = require("./articles/articleDOM")
const taskDom = require("./tasks/taskDom")
const innerDB = require("./innerHTML/innerDB")

const populateDOM = DOM => {
    innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;
    })
    articleDOM()
    taskDom()
}

module.exports = populateDOM
