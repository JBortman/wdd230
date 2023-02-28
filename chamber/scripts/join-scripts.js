joinDate = document.querySelector('#join-date');

const accessDate = new Date().toLocaleDateString();
const accessTime = new Date().toLocaleTimeString();
joinDate.innerHTML = `Accessed ${accessDate} @ ${accessTime}`;