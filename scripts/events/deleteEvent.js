// John Dulaney
// This module creates a function that retires replicants... and code. Use it wisely.
//┌(° ͜ʖ͡°)┘

// imports
const db = require("../Database")

//function that deletes events
let deleteEvent = function (event) {
    //set the eventsEl for use, grabs the targets of event__post
    const eventsEl = document.getElementById("event__post")
    // grabs id from target
    const btnId = event.target.id
    //setting id number as the number following __
    const btnIdNum = btnId.split("__")[1];

    //if statement for getting proper id selected for retirement
    if (btnId.startsWith("button__")) {

        //load the database
        const Database = db.load()

        //gets the element and addour unique id number.
        let eventToRemove = document.getElementById("event__" + btnIdNum)
        console.log("You removed an event", eventToRemove)

        //remove the child
        eventsEl.removeChild(eventToRemove)

        //parse id number
        const parseId = parseInt(btnIdNum)
        //filter out unworthy ids
        const filterArray = Database.events.filter(event => event.id !== parseId)
        // set our db to the new filtered array
        Database.events = filterArray
        //resave it to our db
        db.save(Database, "events")
    }
}

//exports
module.exports = deleteEvent