//Author: Paul Ellis; Purpose: function for browser event listener when connections is changed

const db = require("../Database");//get the database object with methods

const friendsPop = () => {
    const Database = db.load();
    const userID = JSON.parse(sessionStorage.getItem("currentUser"));
    const userConnections = Database.connections.filter(connection => userID === connection.user)
    document.getElementById("friendsListTarget").innerHTML = "";
    userConnections.forEach(connection => {
        const friend = Database.users.find(user => user.userId === connection.friend)
        document.getElementById("friendsListTarget").innerHTML += `<h3>${friend.username}</h3>`
    })
}

module.exports = friendsPop