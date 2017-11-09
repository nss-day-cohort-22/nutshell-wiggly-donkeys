//Author:Chase Steely
//Purpose: To create a factory of tasks.
const idGenerator = require("./idGenerator")
const taskIdGen = idGenerator()

 // Factory function for new articles
 const taskFactory = function (taskName, completionDate, completed) {
    return Object.create(null, {
        "taskId": {
            value: taskIdGen.next().value,
            enumerable: true,
        },
        "userId": {
            value: userId,//function
            enumerable: true,
        },
        "taskName": {
            value: taskName,
            enumerable: true,
        },
        "completionDate": {
            value: completionDate,
            enumerable: true,
        },
        "completed": {
            value: false,
            enumerable: true,
        },
    });
};

module.exports = taskFactory()