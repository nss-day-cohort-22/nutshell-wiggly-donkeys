//Author: Paul Ellis; Purpose: Central DB of innerhtml to add to dom

const messages = require("./messagesInner")
const articles = require("./articlesInner")
const events = require("./eventsInner")
const tasks = require("./tasksInner")

const innerHTMLDB = [messages, articles, events, tasks]

module.exports = innerHTMLDB