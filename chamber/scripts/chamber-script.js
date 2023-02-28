/*-----Hamburger button-----*/
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
}

const x = document.getElementById("ham-but")
x.onclick = toggleMenu;

/*-----Day and date for heading-----*/
const headDate = document.querySelector("#head-date")
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
headDate.innerHTML = `<em>${fullDate}</em>`;

/*-----Date and time for last updated-----*/
const footYear = document.querySelector('#foot-year');
const footDate = document.querySelector('#foot-date');

footYear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footDate.innerHTML = `Last Updated: ${date} ${time}`;