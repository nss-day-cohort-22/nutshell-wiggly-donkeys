//John Dulaney and Max
// This file adds some starting structure for our Article Create Form.
//┌(° ͜ʖ͡°)┘

//the creator requires the articleFactory
const articleFactory = require("./articleFactory");

//pull the database from local storage
const Database = JSON.parse(localStorage.getItem("Database"))

Database.articles = Database.articles || [];

//find 'article' div in the html
const articleEl = document.getElementById("article")

//when the article save button is clicked, take what is in the article text box and store it in Database.article, then push to local storage
function articleStore() {
    if (event.target.id === "articleForm_saveButt") {
        const newArticle = articleFactory(
            document.querySelector("input[name='articleForm__url']").value,
            document.querySelector("input[name='articleForm__date']").value,
            document.querySelector("textarea[name='articleForm__note']").value
        );
        Database.articles.push(newArticle);
        localStorage.setItem("Database", JSON.stringify(Database));
    }
}

//run the article button save event above that saves to the Database (articleStore) when anything is clicked in the article div element
articleEl.addEventListener("click", articleStore)

// Sort the articles by their `id` property, descending
Database.articles.sort((p, n) => n.id - p.id);

module.exports = Database

















//Deprecated code

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


//     localStorage.setItem("Database", JSON.stringify(Database))
//     document.forms["article__form"].reset();

// })

// module.exports = Database.articles

