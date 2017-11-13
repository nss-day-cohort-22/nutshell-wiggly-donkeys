// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const articleFactory = require("./articleFactory")
const articleCreator = require("./articleCreator")
const articleDelete = require("./articleDelete")
const Database = require("../Database")

// get article
const articleEl = document.getElementById("articles")

//function for scope
const articleDOM = (article) => {
    const deleteButton = deleteArticle()
    article.forEach(artPush => {
        articleEl.innerHTML += `
                <br>
    <article id=${Database.article.id}>
        <div>Article you shared on ${Database.article.date}</div>
            <div>${Database.article.userID}</div>
            <div>${Database.article.url}</div>
            <div>${Database.article.note}</div>
            <input type="button" id="articleForm__deleteButt" class="article__button" value="Delete this article">
            <div>${deleteButton}</div>
                <br>
    </article>
        `
    })
}

module.exports = articleDOM