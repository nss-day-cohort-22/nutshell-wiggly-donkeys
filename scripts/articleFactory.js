// John Dulaney
// This fine piece of butchered code creats a factory for our DB


const articleIdGenerator = idGenerator();

const articleFactory = (userId, url, note, date) => {
    return Object.create(null, {
        "id":{
            value: articleIdGenerator.next().value,
            enumerable: true
        },
        "userId":{
            value: userId,
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



// const articleFactory = {
//     "userId" : userId,
//     "articleTitle" : articleTitle,
//     "articleContent" :  articleContent,
//     "date" : Date.now(),
//     "url" : url 
// }


