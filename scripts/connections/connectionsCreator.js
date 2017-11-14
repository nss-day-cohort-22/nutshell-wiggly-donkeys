const db = require("../Database");//get the database object with methods
const connectionsFactory = require("./connectionsFactory");

const addinFriends = () => {
    const Database = db.load();
    Database.connections = Database.connections || [];
    const userID = JSON.parse(sessionStorage.getItem("currentUser"));
    const user = Database.users.find(user => userID === user.userId);
    const wantedFriend = document.getElementById("addFriend_input").value;
    const match = Database.users.find(user => user.username === wantedFriend);
    Database.connections.push(connectionsFactory(user, match))
    db.save(Database)
    console.log(Database.connections)
}

document.getElementById("friendsList").addEventListener("click", addinFriends)