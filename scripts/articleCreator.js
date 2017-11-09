//John Dulaney
// This file adds some starting structure for our Article Create Form.

//imports
const articleFactory = require("./articleFactory")
const Database = require("./Database")

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

    document.forms["article__form"].reset();

})


{/* <article>
<form name="article__form">
    <label>Date</label>
        <input type="date" name='articleForm__date' id="" value="Date">
    <label>URL</label>
        <input type="text" name='articleForm__url' value="URL">
    <label>Note</label>
        <textarea name="'articleForm__note'" id="note" name="Notes" cols="30" rows="10"></textarea>
    <label>Post</label>
        <input type="button" id="articleForm__saveButt" class="article__button" value="Post Article">
</form> */}