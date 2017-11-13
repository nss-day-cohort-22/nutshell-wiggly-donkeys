//John Dulaney
// This file adds some starting structure for our Article Create Form.
//┌(° ͜ʖ͡°)┘

//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))

Database.messages = Database.messages || [];

//find 'message' div in the html
const messagesEl = document.getElementById("messages")

//when the message save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function messageStore () {
    if (event.target.id === "messageForm_saveButt") {
        const newMessage = messagesFactory(
            document.getElementById("messageForm_text").value
        );
        Database.messages.push(newMessage);
        localStorage.setItem("Database", JSON.stringify(Database));
    }
}

//run the message button save event above that saves to the Database (messageStore) when anything is clicked in the message div element
function messageListen () {
    messagesEl.addEventListener("click", messageStore)
}

//run the messageListen function
messageListen();

module.exports = Database

// //imports
// const articleFactory = require("./articleFactory")
// // const Database = require("../Database")
// localStorage.setItem("Database", JSON.parse(Database))

// //Create empty array if we need it
// Database.articles = Database.articles || []

// // Add click event listener to the save button
// const saveArticleEl = document.getElementById("articleForm__saveButt")
//     addEventListener("click", event => {

// // Create a new article object
//     const newArticle = articleFactoryValue(
//         document.querySelector("input[name='articleForm__url']").value,
//         document.querySelector("input[name='articleForm__date']").value,
//         document.querySelector("textarea[name='articleForm__note']").value
//             )

//     // Add new article to array
//     Database.articles.push(newArticle);

//     // Sort the articles by their `id` property, descending
//     Database.articles.sort((p, n) => n.id - p.id);

//     localStorage.setItem("Database", JSON.stringify(Database))
//     document.forms["article__form"].reset();

// })

// module.exports = Database.articles
