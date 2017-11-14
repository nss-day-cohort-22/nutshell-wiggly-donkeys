// John Dulaney
// This js file sends events strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const Database = require("../Database")


//function for scope
const eventsDOM = () => {
    
    const Database = JSON.parse(localStorage.getItem("Database"))
    // get events
    const eventsEl = document.getElementById("event__post")
    eventsEl.innerHTML = ""

    Database.events.forEach(evPush => {
        eventsEl.innerHTML += `
                <br>
    <events id=${evPush.id}>
    <h1>out put here</h1>
        
        <div>events you shared on ${evPush.date}</div>
        <div>${evPush.url}</div>
        <div>${evPush.note}</div>
        <br>
        </events>
        `
    })
}
module.exports = eventsDOM