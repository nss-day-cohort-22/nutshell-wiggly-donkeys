// John Dulaney
// This fine piece of butchered code creates a factory for storing articles in our nutshellDB


const articleIdGenerator = idGenerator();

const articleFactory = (userId, url, note, date) => {
    return Object.create(null, {
        "id":{
            value: articleIdGenerator.next().value,
            enumerable: true
        },
        "userId":{
            value: userId,  //function coming soon
            enumerable: true
        },
        "url":{
            value: url,
            enumerable: true
        },
        "note":{
            value: note,
            enumerable: true
        },
        "date":{
            value: Date.now(),
            enumerable: true
            }
        }
    )
}


// Add click event listener to the save button
const saveButtEl = document.getElementById("articleForm__saveButt").
addEventListener("click", event => {

// Create a new article object
const newArticle = articleFactoryValue(
    document.querySelector("input[name='articleForm__url']").value,
    document.querySelector("input[name='articleForm__date']").value,
    document.querySelector("textarea[name='articleForm__note']").value
        )

// Add new article to array
articleDatabase.articles.push(newArticle);

// Sort the articles by their `id` property, descending
articleDatabase.articles.sort((p, n) => n.id - p.id);

// Serialize and store database
localStorage.setItem("Database", JSON.stringify(Database));
})

module.exports = articleFactory 