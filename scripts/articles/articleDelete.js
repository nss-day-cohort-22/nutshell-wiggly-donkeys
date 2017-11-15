// John Dulaney
// This module creates a function that retires replicants... and code. Use it wisely.
//┌(° ͜ʖ͡°)┘

const db = require("../Database")
let deleteArticle = function(event) {
    const articleEl = document.getElementById("article__post")
    const btnId = event.target.id
    const btnIdNum = btnId.split("__")[1];
    
    //if statement for getting proper id selected for retirement
    if (btnId.startsWith("button__")) {
        const Database = db.load()
        
        //the Harrison Ford of code.
        let articleToRemove = document.getElementById("article__" + btnIdNum)
        console.log("You removed an article", articleToRemove)
        
        //Ryan Gosling or something
        articleEl.removeChild(articleToRemove)
        //parse id number
        const parseId = parseInt(btnIdNum)
        //filter out unworthy ids
        const filterArray = Database.articles.filter(article => article.id !== parseId)
        // set our db to the new filtered array
        Database.articles = filterArray
        //resave it to our db
        db.save(Database, "articles")
    }
}
module.exports = deleteArticle

