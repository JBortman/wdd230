/* -----Get date for hidden message----- */
const d = new Date().getDay();
//console.log(d); //-----troubleshooting
if (d == 1 || d == 2){
    document.getElementById('meeting').hidden = false;
}
else {
    document.getElementById('meeting').hidden = true;
};

// -----Weather API-----
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Pioche&units=imperial&appid=c24c8561a97560a6383a790eb1954865';

async function getWeatherData() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
        calculateChill(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getWeatherData();

  // -----Wind Chill Script-----

function calculateChill (weatherdata) {
    const tempHTML = weatherdata.main.temp.toFixed(0);
    const windHTML = weatherdata.wind.speed.toFixed(0);

    temp = parseInt(tempHTML)
    wind = parseInt(windHTML)

    //console.log(temp)
    //console.log(wind)

    if(temp <= 50 && wind > 3){
        chill = Math.round(35.74 + ( 0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16)));
        document.querySelector('#chill').innerHTML = chill;
    }
    else
    {
        //console.log("N/A")
        document.querySelector('#chill').textContent = "N/A"
    }
}

// -----Get Weather API info-----
const currentTemp = document.querySelector('#temp')
const icon = document.querySelector('#icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');

function displayResults(weatherdata) {
    currentTemp.innerHTML = weatherdata.main.temp.toFixed(0);
    currentWind.innerHTML = weatherdata.wind.speed.toFixed(0);
    humidity.innerHTML = weatherdata.main.humidity.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description;

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

//-----Index JSON-----
const file = 'json/data.json'

async function getFileData() {
    const response = await fetch(file);
        const data = await response.json();
        //console.table(data.companies)
        displaySpotlights(data.companies);
    };

getFileData();

//---------------Spotlights----------------

//-----Spotlight1-----
const displaySpotlights = (companies) => {
    let spot1 = document.querySelector('div#spot1');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p'); 

    let spotCompany = companies.filter(function(test) {
        return test.level != "Bronze Pickaxe" && test.level != "NP (Non-profit)";
    });
    let randCompany = spotCompany[Math.floor(Math.random()*spotCompany.length)];

    h3.textContent = randCompany.name;
    p1.textContent = randCompany.email;
    p2.textContent = randCompany.phone;

    image.setAttribute('alt', `${randCompany.name} logo`);
    image.setAttribute('src', `images/${randCompany.logo}`);
    image.setAttribute('loading', 'lazy');

    spot1.appendChild(h3);
    spot1.appendChild(image);
    spot1.appendChild(p1);
    spot1.appendChild(p2);

//-----Spotlight2-----
    let spot2 = document.querySelector('div#spot2');
    let h32 = document.createElement('h3');
    let image2 = document.createElement('img');
    let p12 = document.createElement('p');
    let p22 = document.createElement('p');

    let spotCompany2 = companies.filter(function(test) {
        return test.level != "Bronze Pickaxe" && test.level != "NP (Non-profit)" && test.name != randCompany.name;
    });
    let randCompany2 = spotCompany2[Math.floor(Math.random()*spotCompany2.length)];

    h32.textContent = randCompany2.name;
    p12.textContent = randCompany2.email;
    p22.textContent = randCompany2.phone;

    image2.setAttribute('alt', `${randCompany2.name} logo`);
    image2.setAttribute('src', `images/${randCompany2.logo}`);
    image2.setAttribute('loading', 'lazy');

    spot2.appendChild(h32);
    spot2.appendChild(image2);
    spot2.appendChild(p12);
    spot2.appendChild(p22);

//-----Spotlight3-----
    let spot3 = document.querySelector('div#spot3');
    let h33 = document.createElement('h3');
    let image3 = document.createElement('img');
    let p13 = document.createElement('p');
    let p23 = document.createElement('p');

    let spotCompany3 = companies.filter(function(test) {
        return test.level != "Bronze Pickaxe" && test.level != "NP (Non-profit)" && test.name != randCompany.name && test.name != randCompany2.name;
    });
    let randCompany3 = spotCompany3[Math.floor(Math.random()*spotCompany3.length)];

    h33.textContent = randCompany3.name;
    p13.textContent = randCompany3.email;
    p23.textContent = randCompany3.phone;

    image3.setAttribute('alt', `${randCompany3.name} logo`);
    image3.setAttribute('src', `images/${randCompany3.logo}`);
    image3.setAttribute('loading', 'lazy');

    spot3.appendChild(h33);
    spot3.appendChild(image3);
    spot3.appendChild(p13);
    spot3.appendChild(p23);
} //----It is a lot, but it allows the spolights to not repeat


