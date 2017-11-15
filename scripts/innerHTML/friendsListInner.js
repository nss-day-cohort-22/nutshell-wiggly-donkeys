//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for events div

const friendsHTML = {
    "id": {
        enumerable: true,
        value: "friendsList"
    },
    "inner": {
        enumerable: true,
        value: `
        <section class="container">
        <h1>Add a friend</h1>
        <input type="text" id="addFriend_input" placeholder="Friend username.">
        <button id="addFriend_button">Add Friend</button>
        </section>
        <section class="container" id="myFriends">
        <h2>My Friends</h2>
        <section class="container" id="friendsListTarget">
        </section>
        </section>
        `
    }
}

module.exports = friendsHTML;