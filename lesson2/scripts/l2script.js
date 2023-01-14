const footyear = document.querySelector('#footyear');
const footdate = document.querySelector('#footdate');

footyear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footdate.innerHTML = `Last Updated: ${date} ${time}`;