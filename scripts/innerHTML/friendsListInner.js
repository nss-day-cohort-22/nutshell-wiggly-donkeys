//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for events div

const friendsHTML = {
    "id": {
        enumerable: true,
        value: "friendsList"
    },
    "inner": {
        enumerable: true,
        value: `
        <input id="addFriend_input" placeholder="Don't be lonely. Type a friend's username." size="50">
        <button id="addFriend_button">Add Friend</button>
        `
    }
}

module.exports = friendsHTML;