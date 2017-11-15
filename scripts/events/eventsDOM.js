// John Dulaney
// This js file sends events strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const editEvents  = require("./editEvents")
const deleteEvent  = require("./deleteEvent")


//function
const eventsDOM = () => {
    const Database = db.load()
    Database.events = Database.events || [];    
    const eventsEl = document.getElementById("event__post")
        eventsEl.innerHTML = ""
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
    eventsEl.addEventListener("click", deleteEvent)
    eventsEl.addEventListener("click", editEvents)
    
}
module.exports = eventsDOM