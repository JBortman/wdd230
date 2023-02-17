/*-----Hamburger button-----*/
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamBut")
x.onclick = toggleMenu;

/*-----Day and date for heading-----*/
const headDate = document.querySelector("#headDate")
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
headDate.innerHTML = `<em>${fullDate}</em>`;

/*-----Date and time for last updated-----*/
const footYear = document.querySelector('#footYear');
const footDate = document.querySelector('#footDate');

footYear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footDate.innerHTML = `Last Updated: ${date} ${time}`;

/* -----Get date for hidden message----- */
const d = new Date().getDay();
if (d == 1 || d == 2){
    document.getElementById('meeting').hidden = false;
}
else {
    document.getElementById('meeting').hidden = true;
    // console.log(d); ---- troubleshoot getDate()
};

