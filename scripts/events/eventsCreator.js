//John Dulaney and Max
// This file adds some starting structure for our event Create Form.

//the creator requires the eventsFactory
const eventsFactory = require("./eventsFactory");

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))

Database.events = Database.events || [];

//find 'events' div in the html
const eventsEl = document.getElementById("events")

//when the events save button is clicked, take what is in the events text box and store it in Database.events, then push to local storage
function eventsStore () {
    if (event.target.id === "eventForm_saveButt") {
        const newevents = eventsFactory(
            document.querySelector("input[name='eventForm__name']").value,
            document.querySelector("input[name='eventForm__date']").value,
            document.querySelector("textarea[name='eventForm__location']").value
        );
        Database.events.push(newevents);
        localStorage.setItem("Database", JSON.stringify(Database));
    }
}

//run the events button save event above that saves to the Database (eventsStore) when anything is clicked in the events div element
function eventsListen () {
    eventsEl.addEventListener("click", eventsStore)
}

//run the eventsListen function
eventsListen();

module.exports = Database















// //imports
// const eventFactory = require("./eventFactory")
// const Database = require("../Database.js")

// //Create empty array if we need it
// Database.events = Database.events || []

// // Add click event listener to the save button
// const saveEventEl = document.getElementById("eventForm__saveButt").
// addEventListener("click", event => {

// // Create a new event object
// const newEvent = eventFactoryValue(
//     document.querySelector("input[name='eventForm__name']").value,
//     document.querySelector("input[name='eventForm__date']").value,
//     document.querySelector("textarea[name='eventForm__location']").value
//         )

// // Add new event to array
// Database.events.push(newEvent);

// // Sort the events by their `id` property, descending
// Database.events.sort((p, n) => n.id - p.id);

// })
