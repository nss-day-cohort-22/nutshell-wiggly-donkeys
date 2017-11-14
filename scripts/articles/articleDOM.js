// John Dulaney
// This js file sends article strings to our Dashboard
//┌(° ͜ʖ͡°)┘

//imports
const Database = require("../Database")
// const articleFactory = require("./articleFactory")
// const articleCreator = require("./articleCreator")
// const articleDelete = require("./articleDelete")


//function for scope
const articleDOM = () => {
    
    const Database = JSON.parse(localStorage.getItem("Database"))
    // get article
    const articleEl = document.getElementById("article__post")
    articleEl.innerHTML = ""
    // const deleteButton = deleteArticle()
    Database.articles.forEach(artPush => {
        articleEl.innerHTML += `
                <br>
    <article id=${artPush.id}>
    <h1>out put here</h1>
        
        <div>Article you shared on ${artPush.date}</div>
        <div>${artPush.url}</div>
        <div>${artPush.note}</div>
        <input type="button" id="articleForm__deleteButt" class="article__button" value="Delete this article">
        <br>
        </article>
        `
    })
}
    

    // <div>${artPush.userID}</div>
    // <dibv>${deleteButton}</dibv>
module.exports = articleDOM