//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for articles div

const articlesHTML = {
    "id": {
        enumerable: true,
        value: "articles"
    },
    "inner": {
        enumerable: true,
        value: `
        <section class="container">        
    <article class="form">
        <form name="article__form">
        <h2>Share fake news and annoy your friends!</h2>
        <label>Date</label>
            <div class="form-group col-3">
                <input type="date" name='articleForm__date' id="" class="form-control" value="" placeholder="">
            </div>
        <label>URL</label>
            <div class="form-group col-3">
                <input type="text" name='articleForm__url' value="" id="" class="form-control" placeholder="Link URL here.">
            </div>
        <label>Note</label>
            <div class="form-group col-4">
                <textarea name="articleForm__note" id="note" name="Notes" cols="30" rows="10" placeholder="Add a note about the article"></textarea>
            </div>
            </form>
            <div class="form-group col-3">
                <input type="button" id="articleForm__saveButt" class="article__button" value="Post Article">
            </div>
        </article>
        <div id="article__post" class="output"> 
        <br>
        <br>
        <br>
        <br>
        
        hello
        </div>
        
        </section>
        
        
        
        
        `


    }
}


module.exports = articlesHTML;