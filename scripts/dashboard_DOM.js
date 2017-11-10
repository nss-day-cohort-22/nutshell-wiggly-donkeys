//Author: Paul Ellis; Purpose: function that populates the dashboard

const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the main database
const dashboard = document.getElementById("dashboard")
