// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const deleteArticle  = require("./articleDelete")

//function
const articleDOM = () => {
    const Database = db.load()
    Database.articles = Database.articles || [];
    const articleEl = document.getElementById("article__post")
        articleEl.innerHTML = ""
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
    articleEl.addEventListener("click", deleteArticle)
}

module.exports = articleDOM