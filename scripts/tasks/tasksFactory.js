//Author:Chase Steely
//Purpose: To create a factory of tasks.
const idGenerator = require("../idGenerator")
const db = require("../Database")
let taskIdGen = null

 // Factory function for new articles
 const taskFactory = function (taskName, completionDate) {
    const Database = db.load();//use load method of database object to get local storage
    Database.tasks = Database.tasks || [];//if Database.users doesn't exist, set to empty array
    if (Database.tasks.length === 0){taskIdGen = idGenerator()}
    else {
        Database.tasks.sort((p,n) => n.taskId - p.taskId);//..sort tasks array to have highest id number at index 0
        taskIdGen = idGenerator(Database.tasks[0].taskId);//set instance of id generator to be passed highest id number for it's starting number
    }
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