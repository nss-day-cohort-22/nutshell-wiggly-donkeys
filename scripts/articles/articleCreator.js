//John Dulaney and Max
// This file adds some starting structure for our Article Create Form.
//┌(° ͜ʖ͡°)┘

//the creator requires the articleFactory
const db = require("../Database")
const articleFactory = require("./articleFactory");
const articleDOM = require("./articleDOM")



//find 'article' div in the html
const articleEl = document.getElementById("articles")

//when the article save button is clicked, take what is in the article text box and store it in db.article, then push to local storage
function articleStore() {
    const Database = db.load()
    
    //Create an articles key or make an empty array
    Database.articles = Database.articles || [];
    
    // Sort the articles by their `id` property, descending
    Database.articles.sort((p, n) => n.id - p.id);

    if (event.target.id === "articleForm__saveButt") {
        const newArticle = articleFactory(
            document.querySelector("input[name='articleForm__url']").value,
            document.querySelector("textarea[name='articleForm__note']").value,
            document.querySelector("input[name='articleForm__date']").value
        );

        //push new article into database
        Database.articles.push(newArticle);

        //save to db
        db.save(Database, "articles")

        //run dom function
        articleDOM()

        //reset form
        document.forms["article__form"].reset();
    }
}
//run the article button save event above that saves to the Database (articleStore) when anything is clicked in the article div element
articleEl.addEventListener("click", articleStore)



















//Deprecated code

// //imports
// const articleFactory = require("./articleFactory")
// // const Database = require("../Database")
// localStorage.setItem("Database", JSON.parse(Database))

// //Create empty array if we need it
// Database.articles = Database.articles || []

// // Add click event listener to the save button
// const saveArticleEl = document.getElementById("articleForm__saveButt")
//     addEventListener("click", event => {

// // Create a new article object
//     const newArticle = articleFactoryValue(
//         document.querySelector("input[name='articleForm__url']").value,
//         document.querySelector("input[name='articleForm__date']").value,
//         document.querySelector("textarea[name='articleForm__note']").value
//             )

//     // Add new article to array
//     Database.articles.push(newArticle);


//     localStorage.setItem("Database", JSON.stringify(Database))
//     document.forms["article__form"].reset();

// })

// module.exports = Database.articles

