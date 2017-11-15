//John Dulaney and Max
// This file adds some starting structure for our event Create Form.
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const eventsFactory = require("./eventsFactory");
const eventsDOM = require("./eventsDOM")

//find 'events' div in the html
const eventsEl = document.getElementById("events")

//when the events save button is clicked, take what is in the events text box and store it in Database.events, then push to local storage
function eventsStore() {
    //load the database
    const Database = db.load()
    //Create an events key or make an empty array
    Database.events = Database.events || [];

    // Sort the events by their `id` property, descending
    Database.events.sort((p, n) => n.id - p.id);

    //if statement that makes a factory
    if (event.target.id === "eventForm__saveButt") {
        console.log("im working")
        const newEvents = eventsFactory(
            document.querySelector("input[name='eventForm__name']").value,
            document.querySelector("input[name='eventForm__date']").value,
            document.querySelector("input[name='eventForm__location']").value
        );

        //unshifts an article into the DB
        Database.events.unshift(newEvents);

        //save to db
        db.save(Database, "events")

        //run dom function
        eventsDOM()

        //reset form
        document.forms["event__form"].reset();
    }
}

//run the events button save event above that saves to the Database (eventsStore) when anything is clicked in the events div element
eventsEl.addEventListener("click", eventsStore)