// // John Dulaney
// // This module creates a function that retires replicants... and code. Use it wisely.
// //┌(° ͜ʖ͡°)┘

const db = require("../Database")


let deleteArticle = function(event) {
    const articleEl = document.getElementById("article__post")
    const btnId = event.target.id
    const btnIdNum = btnId.split("__")[1];
    
    //if statement for getting proper id selected for retirement
    if (btnId.startsWith("button__")) {
        
        //the Harrison Ford of code.
        let articleToRemove = document.getElementById("article__" + btnIdNum)
        console.log("You removed an article", articleToRemove)
        
        //Ryan Gosling or something
        articleEl.removeChild(articleToRemove)
        return false
        // filterArray.this
    }
    // Vague attempts to clear from local storage
    let deleteStorage = function(){
        // load database 
        const Database = db.load()
        // define a filter that goes into DB and filters false articles
        const filterArray = Database.articles.filter()
        //if statement that checks if an article is set to false
            if (article === false) {
                //if it is, run the .filter function
                filterArray
            }
    } 
    //call the filter function to be included with the delete function
    deleteStorage()
}


module.exports = deleteArticle


// localstorage.removeItem()