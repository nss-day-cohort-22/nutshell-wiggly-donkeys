//Author: Paul Ellis; Purpose: Listen for change in browser storage

const changedKey = JSON.parse(localStorage.getItem("changedKey"));
const update = () => {
    console.log(changedKey)
}

const storageListener = () => {
    window.addEventListener("storage", filler)
}