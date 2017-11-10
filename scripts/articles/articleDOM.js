// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const articleFactory = require("./articleFactory")
const articleCreator = require("./articleCreator")
const Database = require("../Database")

// get article
const articleEl = document.getElementById("articles")

//function for scope
const articleDOM = (article) => {
    const deleteButton = deleteArticle()
    article.forEach(artPush => {
        articleEl.innerHTML += `
        <article id=${Database.article.id}>
            <div>${Database.article.userID}</div>
            <div>${Database.article.url}</div>
            <div>${Database.article.note}</div>
            <div>${Database.article.date}</div>
            <div>${deleteButton}</div>
                        <br>
        </article>
        `
    })()
}

module.exports = articleDOM