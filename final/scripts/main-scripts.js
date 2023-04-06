//-----Last updated date & year for footer-----
const lastDate = document.querySelector('#last-update');
const year = document.querySelector('#current-year');

const date = new Date().toLocaleDateString();
lastDate.innerHTML = date;

year.innerHTML = new Date().getFullYear();
