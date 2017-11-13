//Author: Paul Ellis; Purpose: function that populates the dashboard

const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
<<<<<<< HEAD
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the main database
const messages = document.getElementById("messages");
const tasks = document.getElementById("tasks");
const events = document.getElementById("events");
const articles = document.getElementById("articles");

const populateDOM = DOM => {
     messages.innerHTML = `
     <div id="messageForm">
     <h2 id=messageForm_title>New Message</h2>
     <textarea id="messageForm_text" rows="4" cols= "20"></textarea>
     <button id="messageForm_saveButt">Send</button>
     </div>
     <div id="messageOutput">
     </div>`
=======
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user

const populateDOM = DOM => {
    Database.innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;

    })
>>>>>>> master
}

module.exports = populateDOM