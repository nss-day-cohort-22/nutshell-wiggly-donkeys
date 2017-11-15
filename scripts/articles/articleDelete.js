// John Dulaney
// This module creates a function that retires replicants... and code. Use it wisely.
//┌(° ͜ʖ͡°)┘

//imports
const db = require("../Database")

//function that deletes articles
let deleteArticle = function (event) {
    //set articleEl for use, grabs target of article__post
    const articleEl = document.getElementById("article__post")
    // grab id from target
    const btnId = event.target.id
    //setting id number as the number following __
    const btnIdNum = btnId.split("__")[1];

    //if statement for getting proper id selected for retirement
    if (btnId.startsWith("button__")) {

        //load database
        const Database = db.load()

        //the Harrison Ford of code. Gets element and adds our unique id number. Is also overpaid
        let articleToRemove = document.getElementById("article__" + btnIdNum)
        console.log("You removed an article", articleToRemove)

        //Ryan Gosling or something. Remove the child.
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

// exports
module.exports = deleteArticle