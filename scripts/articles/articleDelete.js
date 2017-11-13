// John Dulaney
// This module creates a function that retires replicants... and code. Use it wisely.
//┌(° ͜ʖ͡°)┘

let deleteArticle = function(event) {
    const btnId = event.target.id
    const btnIdNum = btnId.split("__")[1];

//if statement for getting proper id selected for retirement
    if (btnId.startsWith("article__")) {

        //the Harrison Ford of code.
        let articleToRemove = document.getElementById("article__" + btnIdNum)
        //Ryan Gosling or something
        articleEl.removeChild(articleToRemove)
    }
}

articleEl.addEventListener("click", deleteArticle)

module.exports = deleteArticle