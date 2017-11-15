// John Dulaney
// This module creates a function that retires replicants... and code. Use it wisely.
//┌(° ͜ʖ͡°)┘

const db = require("../Database")
let deleteEvent = function(event) {
    const eventsEl = document.getElementById("event__post")
    const btnId = event.target.id
    const btnIdNum = btnId.split("__")[1];
    
    //if statement for getting proper id selected for retirement
    if (btnId.startsWith("button__")) {
        const Database = db.load()
        
        let eventToRemove = document.getElementById("event__" + btnIdNum)
        console.log("You removed an event", eventToRemove)
        
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
module.exports = deleteEvent