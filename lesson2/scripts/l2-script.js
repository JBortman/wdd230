const footYear = document.querySelector('#footYear');
const footDate = document.querySelector('#footDate');

footYear.textContent = new Date().getFullYear();

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
footDate.innerHTML = `Last Updated: ${date} ${time}`;