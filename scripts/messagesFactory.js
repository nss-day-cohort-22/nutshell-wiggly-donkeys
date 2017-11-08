const messagesIdGenerator = idGenerator();

const messagesFactory = (userID, message) => {
    return Object.create(null, {
        "messageId": {
            value: messagesIdGenerator.next().value,
            enumerable: true
        },
        "userID": {
            value: userID,
            enumerable: true
        },
        "message": {
            value: message,
            enumerable: true
        }
    })
}