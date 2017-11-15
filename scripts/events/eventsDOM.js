// John Dulaney
// This js file sends events strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const editEvents  = require("./editEvents")

//function
const eventsDOM = () => {
    const Database = db.load()
    Database.events = Database.events || [];    
    const eventsEl = document.getElementById("event__post")
        // eventsEl.innerHTML = ""
            Database.events.forEach(p => {
                eventsEl.innerHTML += `
            <section id=${p.id}>
                <h1>${p.name}</h1>
                    <div>Event Date: ${p.date}</div>
                    <div>Event Location:${p.location}</div>
                    <input type="button" id="button__${p.id}" class="event__button" value="Edit this article">
            </section>
        `
    })
    eventsEl.addEventListener("click", editEvents)
    
}
module.exports = eventsDOM