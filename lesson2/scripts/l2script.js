const footyear = document.querySelector('#foot-year');
const footdate = document.querySelector('#foot-date');

footyear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footdate.innerHTML = `Last Updated: ${date} ${time}`;