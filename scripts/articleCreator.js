//John Dulaney
// This file adds some starting structure for our Article Create Form.

//imports
const articleFactory = require("./articleFactory")
const Database = require("./Database.js")

//Create empty array if we need it
Database.articles = Database.articles || []

// Add click event listener to the save button
const saveArticleEl = document.getElementById("articleForm__saveButt").
    addEventListener("click", event => {

// Create a new article object
    const newArticle = articleFactoryValue(
        document.querySelector("input[name='articleForm__url']").value,
        document.querySelector("input[name='articleForm__date']").value,
        document.querySelector("textarea[name='articleForm__note']").value
            )

    // Add new article to array
    Database.articles.push(newArticle);

    // Sort the articles by their `id` property, descending
    Database.articles.sort((p, n) => n.id - p.id);

})

