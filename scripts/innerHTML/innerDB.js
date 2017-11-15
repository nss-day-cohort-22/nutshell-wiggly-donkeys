//Author: Paul Ellis; Purpose: Central DB of innerhtml to add to dom

const db = require("../Database")
const messages = require("./messagesInner")
const articles = require("./articlesInner")
const events = require("./eventsInner")
const tasks = require("./tasksInner")
const friendsList = require("./friendsListInner")

const innerHTMLDB = [messages, articles, events, tasks, friendsList];

module.exports = innerHTMLDB