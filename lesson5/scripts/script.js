const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const listItem = input.value;
    input.value = '';

    const newLi = document.createElement('li');
    const deleteBut = document.createElement('button');

    newLi.textContent = listItem;
    deleteBut.textContent = '❌';

    newLi.appendChild(deleteBut);
    list.appendChild(newLi);

deleteBut.addEventListener('click', function(){
    list.removeChild(newLi);
});

input.focus();

});