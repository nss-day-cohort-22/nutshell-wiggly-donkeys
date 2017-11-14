//Author: Paul Ellis; Purpose: function that populates the dashboard

const db = require("./Database")
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user
const innerDB = require("./innerHTML/innerDB")
const Database = db.load();
const storageListener = require("./storage-listener");

const populateDOM = DOM => {
    innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;
    })
    storageListener();
}

module.exports = populateDOM
