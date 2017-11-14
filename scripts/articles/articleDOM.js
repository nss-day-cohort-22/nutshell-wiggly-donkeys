// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")
const deleteArt = require("./articleDelete")

//function for scope
const articleDOM = () => {
    const Database = db.load()
    Database.articles = Database.articles || [];
    const articleEl = document.getElementById("article__post")
    // const deleteButton = deleteArticle()
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

db.save(Database)
}

    // <div>${artPush.userID}</div>
    
    // <dibv>${deleteButton}</dibv>

module.exports = articleDOM