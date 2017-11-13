//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for articles div

const articlesHTML = {
    "id": {
        enumerable: true,
        value: "articles"
    },
    "inner": {
        enumerable: true,
        value: `<article>
    <form name="article__form">
        <label>Date</label>
            <input type="date" name='articleForm__date' id="" value="Date">
        <label>URL</label>
            <input type="text" name='articleForm__url' value="URL">
        <label>Note</label>
            <textarea name="'articleForm__note'" id="note" name="Notes" cols="30" rows="10"></textarea>
        <label>Post</label>
            <input type="button" id="articleForm__saveButt" class="article__button" value="Post Article">
    </form>`
    }
}


module.exports = articlesHTML;