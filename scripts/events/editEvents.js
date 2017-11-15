// John Dulaney
// This module creates a function that edits events. this is thrown together
//┌(° ͜ʖ͡°)┘

const db = require("../Database")

// let editEvents = function(event) {
//     console.log("im the edit function")
//     const eventEl = document.getElementById("event__post")
//     const btnId = event.target.id
//     const btnIdNum = btnId.split("__")[1];
    
//     //if statement for getting proper id selected for edit
//     if (btnId.startsWith("button__")) {
//         const Database = db.load()
        
//         let eventToEdit = document.getElementById("event__" + btnIdNum)
//         console.log("You are trying to use the wrong code on: ", eventToEdit)
        
//         // delete functionality
//         // eventEl.removeChild(eventToRemove)

//         //parse id number
//         const parseForEdit  = parseInt(btnIdNum)

//         //filter out unworthy ids
//         // const filterArray = Database.articles.filter(article => article.id !== parseId)
//         // set our db to the new filtered array
//         // Database.articles = filterArray

        //resave it to our db
        db.save(Database, "events")
    





module.exports = editEvents
