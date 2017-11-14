// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")

//function for scope
const articleDOM = () => {
    const Database = db.load()
    Database.articles = Database.articles || [];
    const articleEl = document.getElementById("article__post")
        articleEl.innerHTML = ""
    // const deleteButton = deleteArticle()
             Database.articles.forEach(artPush => {
                articleEl.innerHTML += `
                <article id=${artPush.id}>
                    <br>
                    <h1>out put here</h1>
                        <div>Article you shared on ${artPush.date}</div>
                        <div>${artPush.url}</div>
                        <div>${artPush.note}</div>
                        <input type="button" id="articleForm__deleteButt" class="article__button" value="Delete this article">
                    <br>
                </article>
                        `
                    })

db.save(Database)
}

    // <div>${artPush.userID}</div>
    // <dibv>${deleteButton}</dibv>
    
module.exports = articleDOM