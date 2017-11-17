// John Dulaney
// This js file sends events strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const editEvents = require("./editEvents")
const deleteEvent = require("./deleteEvent")


//function that populates the DOM using the form from ../innerHTML/eventsInner.js
const eventsDOM = () => {
    //load db for in this scope
    const Database = db.load()
    //grat database.events and set ut, or , set it to an empty array
    Database.events = Database.events || [];
    //get html id set for population    
    const eventsEl = document.getElementById("event__post")
    //innerhtml clear the area
    eventsEl.innerHTML = ""
    //foreach on the events , lists this innerHTML for each event in the db and plugs the correct info
    Database.events.forEach(p => {
        eventsEl.innerHTML += `
            <section id="eventStyle__${p.id}">
                <h1>${p.name}</h1>
                    <div>Event Date: ${p.date}</div>
                    <div>Event Location:${p.location}</div>
                    <input type="button" id="button__${p.id}" class="event__button" value="Delete this event">
                    <input type="button" id="editButton__${p.id}" class="event__button" value="Edit this event">
            </section>
        `
    })
    //add click listeners to the event div that will activate edit and delete. this shit dont work.
    eventsEl.addEventListener("click", deleteEvent)
    eventsEl.addEventListener("click", editEvents)

}

//exports
module.exports = eventsDOM