const db = require("../Database")

//pull the database from local storage


const writeMessages = () => {
    const Database = db.load()
    const messageOut = document.getElementById("messageOutput");
    messageOut.innerHTML = "";
    Database.messages = Database.messages || []
    Database.messages.forEach(messages => {
        messageOut.innerHTML += `
        <div>
            <p>User: ${messages.userId}</p>
            <p>${messages.message}</p>
        <div>`
    })


    // db.save(Database);

}

module.exports = writeMessages