// Factory function that returns a DAtabase object
const DatabaseFactory = function (messages, users, events, articles, tasks) {
    return Object.create(null, {
        "messages": { value: messages, enumerable: true },
        "users": { value: users, enumerable: true},
        "events": { value: events, enumerable: true },
        "articles": { value: articls, enumerable: true },
        "tasks": { value: tasks, enumerable: true }
    })
}