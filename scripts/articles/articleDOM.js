// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const deleteArticle = require("./articleDelete")

//function that populates DOM using the form from ../innerHTML/articlesInner.js
const articleDOM = () => {
    //load db in this scope
    const Database = db.load()
    //grab database.articles and set it, or, set it to empty array
    Database.articles = Database.articles || [];
    //get html id set for population
    const articleEl = document.getElementById("article__post")
    //innerhtml clear the area
    articleEl.innerHTML = ""
    //foreach on articles, lists this innerHTML for each article in the DB and plugs correct info
    Database.articles.forEach(p => {
        articleEl.innerHTML += `
                <article id=article__${p.id} class="article__card col-6">
                        <div>Article you shared on ${p.date}</div>
                        <div><a href="${p.url}">Link to Story</a></div>
                        <div>Notes: ${p.note}</div>
                        <input type="button" id="button__${p.id}" class="article__button" value="Delete this article">
                </article>
                        `
    })

    //add click event to the article that will delete it. Should probably be on a button to be honest...
    articleEl.addEventListener("click", deleteArticle)
}

//exports
module.exports = articleDOM