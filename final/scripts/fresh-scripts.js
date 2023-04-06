const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    makeList(data);
  };

  getFruitData();

// -----Get info from JSON-----
const fruit1 = document.querySelector('#fruit1'); 
const fruit2 = document.querySelector('#fruit2'); 
const fruit3 = document.querySelector('#fruit3'); 
  function makeList(jsonData) {

    jsonData.forEach(fruit => {
        let option1 = document.createElement('option');
        option1.innerHTML = fruit.name;
        fruit1.appendChild(option1);

        let option2 = document.createElement('option');
        option2.innerHTML = fruit.name;
        fruit2.appendChild(option2);

        let option3 = document.createElement('option');
        option3.innerHTML = fruit.name;
        fruit3.appendChild(option3);
    });

  };
  //-----get


  //-----Display order info-----
  const firstName = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const f1 = document.querySelector('#fruit1');
  const f2 = document.querySelector('#fruit2');
  const f3 = document.querySelector('#fruit3');
  const special = document.querySelector('#special');
  const orderInfo = document.querySelector('#order-info')
  const button = document.querySelector('#order-button');
  let curDate = new Date().toLocaleDateString();
  let prevNumber = Number(window.localStorage.getItem("number-of-orders"));


  let carbs = 0;
  let protein = 0;
  let fat = 0;
  let sugar = 0;
  let calories = 0;


button.addEventListener("click", function() {
    let h2 = document.createElement('h2');
    let p = document.createElement('p');        

    h2.innerHTML = "Order Summary"
    p.innerHTML = `${firstName.value}<br>${email.value}<br>${phone.value}<br>${f1.value}<br>${f2.value}<br>${f3.value}<br>${special.value}<br>${curDate}`;

    orderInfo.appendChild(h2)
    orderInfo.appendChild(p)
    let newNumber = prevNumber + 1;
    Number(window.localStorage.setItem("number-of-orders",newNumber))
})