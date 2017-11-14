// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const deleteArticle  = require("./articleDelete")
// const articleEl = document.getElementById("article__post")
// const deleteButton = deleteArticle()

//function
const articleDOM = () => {
    const Database = db.load()
    Database.articles = Database.articles || [];
    const articleEl = document.getElementById("article__post")
        articleEl.innerHTML = ""
             Database.articles.forEach(artPush => {
                articleEl.innerHTML += `
                <article id=article__${artPush.id} class="article__card col-6">
                    <br>
                        <div>Article you shared on ${artPush.date}</div>
                        <div><a href="${artPush.url}">Link to Story</a></div>
                        <div>Notes: ${artPush.note}</div>
                        <input type="button" id="button__${artPush.id}" class="article__button" value="Delete this article">
                        
                    <br>
                </article>
                        `
                    })
    articleEl.addEventListener("click", deleteArticle)
}

module.exports = articleDOM