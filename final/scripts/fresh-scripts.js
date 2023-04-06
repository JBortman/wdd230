const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
let arr = "";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    makeList(data);
    arr = Array.from(data);
    //console.log(arr);
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
  const nutrition = document.querySelector('#nutrition')
  const button = document.querySelector('#order-button');
  let curDate = new Date().toLocaleDateString();
  let prevNumber = Number(window.localStorage.getItem("number-of-orders"));

  let carbs = 0;
  let protein = 0;
  let fat = 0;
  let sugar = 0;
  let calories = 0;

//-----Nutrition Info-----
function getCarbs() {
  carbs = 0;

  arr.forEach(fruit => {
    if (f1.value==fruit.name)
    carbs += fruit.nutritions.carbohydrates;
  });
  
  arr.forEach(fruit => {
    if (f2.value==fruit.name)
    carbs += fruit.nutritions.carbohydrates;
  });

  arr.forEach(fruit => {
    if (f3.value==fruit.name)
    carbs += fruit.nutritions.carbohydrates;
});
}

function getProtein() {
  protein = 0;

  arr.forEach(fruit => {
    if (f1.value==fruit.name)
    protein += fruit.nutritions.protein;
  });
  
  arr.forEach(fruit => {
    if (f2.value==fruit.name)
    protein += fruit.nutritions.protein;
  });

  arr.forEach(fruit => {
    if (f3.value==fruit.name)
    protein += fruit.nutritions.protein;
});
}

function getFat() {
  fat = 0;

  arr.forEach(fruit => {
    if (f1.value==fruit.name)
    fat += fruit.nutritions.fat;
  });
  
  arr.forEach(fruit => {
    if (f2.value==fruit.name)
    fat += fruit.nutritions.fat;
  });

  arr.forEach(fruit => {
    if (f3.value==fruit.name)
    fat += fruit.nutritions.fat;
});
}

function getSugar() {
  sugar = 0;

  arr.forEach(fruit => {
    if (f1.value==fruit.name)
    sugar += fruit.nutritions.sugar;
  });
  
  arr.forEach(fruit => {
    if (f2.value==fruit.name)
    sugar += fruit.nutritions.sugar;
  });

  arr.forEach(fruit => {
    if (f3.value==fruit.name)
    sugar += fruit.nutritions.sugar;
});
}

function getCalories() {
  calories = 0;

  arr.forEach(fruit => {
    if (f1.value==fruit.name)
    calories += fruit.nutritions.calories;
  });
  
  arr.forEach(fruit => {
    if (f2.value==fruit.name)
    calories += fruit.nutritions.calories;
  });

  arr.forEach(fruit => {
    if (f3.value==fruit.name)
    calories += fruit.nutritions.calories;
});
}

function displayHealth(){
  let h2 = document.createElement('h2');
  let p = document.createElement('p'); 

  h2.innerHTML = "Nutritional Info"
  p.innerHTML = `Carbs: ${carbs.toFixed(1)}g<br>Protein: ${protein.toFixed(1)}g<br>Fat: ${fat.toFixed(1)}g<br>Sugar: ${sugar.toFixed(1)}g<br>Calories: ${calories.toFixed()}`;

  nutrition.appendChild(h2);
  nutrition.appendChild(p);
}

button.addEventListener("click", function() {
    let h2 = document.createElement('h2');
    let p = document.createElement('p');        

    h2.innerHTML = "Order Summary"
    p.innerHTML = `${firstName.value}<br>${email.value}<br>${phone.value}<br>#1: ${f1.value}<br>#2: ${f2.value}<br>#3: ${f3.value}<br>${special.value}<br>${curDate}`;

    orderInfo.appendChild(h2)
    orderInfo.appendChild(p)
    let newNumber = prevNumber + 1;
    Number(window.localStorage.setItem("number-of-orders",newNumber))
})

button.addEventListener("click", getCarbs, false)
button.addEventListener("click", getProtein, false)
button.addEventListener("click", getFat, false)
button.addEventListener("click", getSugar, false)
button.addEventListener("click", getCalories, false)
button.addEventListener("click", displayHealth, false)