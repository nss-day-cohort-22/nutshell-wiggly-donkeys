const db = require("../Database");//get the database object with methods
const connectionsFactory = require("./connectionsFactory");
const friendsPop = require("./friendsListPop")

const addinFriends = () => {
    if (event.target.id === "addFriend_button") {
    const Database = db.load();
    Database.connections = Database.connections || [];
    const userID = JSON.parse(sessionStorage.getItem("currentUser"));
    const user = Database.users.find(user => userID === user.userId);
    const wantedFriend = document.getElementById("addFriend_input").value;
    const match = Database.users.find(user => user.username === wantedFriend);
    connectionsFactory(userID, match.userId);
    friendsPop();
    }
}

document.getElementById("friendsList").addEventListener("click", addinFriends)