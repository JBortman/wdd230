/*-----Number of days between visits-----*/
let prevVisit = Number(window.localStorage.getItem("previous-visit"))
let currentVisit = Date.now();
let text = document.querySelector('#timeVisited')

if(prevVisit < 1){
    text.textContent = "Welcome! It appears this is your first visit!"
} else {
    let totalTime = Math.round((currentVisit - prevVisit) / 86400000)
    text.textContent = "It has been "+ totalTime +" days since your last visit"
}
Number(window.localStorage.setItem("previous-visit", currentVisit))