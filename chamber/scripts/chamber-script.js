const nav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', ()=>
{nav.classList.toggle('responsive')}, false);