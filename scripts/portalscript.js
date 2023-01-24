const footyear = document.querySelector('#footYear');
const footdate = document.querySelector('#footDate');

footyear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footdate.innerHTML = `Last Updated: ${date} ${time}`;