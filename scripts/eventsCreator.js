//John Dulaney
// This file adds some starting structure for our event Create Form.

//imports
const eventFactory = require("./eventFactory")
const Database = require("./Database.js")

//Create empty array if we need it
Database.events = Database.events || []

// Add click event listener to the save button
const saveEventEl = document.getElementById("eventForm__saveButt").
addEventListener("click", event => {

// Create a new event object
const newEvent = eventFactoryValue(
    document.querySelector("input[name='eventForm__name']").value,
    document.querySelector("input[name='eventForm__date']").value,
    document.querySelector("textarea[name='eventForm__location']").value
        )

// Add new event to array
Database.events.push(newEvent);

// Sort the events by their `id` property, descending
Database.events.sort((p, n) => n.id - p.id);

})

