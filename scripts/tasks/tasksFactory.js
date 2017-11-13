//Author:Chase Steely
//Purpose: To create a factory of tasks.
const idGenerator = require("../idGenerator")
const Database = require("../Database")
const taskIdGen = idGenerator()

 // Factory function for new articles
 const taskFactory = function (taskName, completionDate) {
    return Object.create(null, {
        "taskId": {
            value: taskIdGen.next().value,
            enumerable: true
        },
        "userId": {
            value: JSON.parse(sessionStorage.getItem("currentUser")),
            enumerable: true
        },
        "taskName": {
            value: taskName,
            enumerable: true,
            writable: true
        },
        "completionDate": {
            value: completionDate,
            enumerable: true
        },
        "completed": {
            value: false,
            enumerable: true,
            writable: true
        },
    });
};

module.exports = taskFactory