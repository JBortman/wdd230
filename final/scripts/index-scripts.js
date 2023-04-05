//-----Weather API-----
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=c24c8561a97560a6383a790eb1954865';

async function getWeatherData() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayWeather(data);
    } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

getWeatherData();

//-----Add weather to page-----
const temp = document.querySelector('#temp-info')
const humid = document.querySelector('#humidity');
const icon = document.querySelector('#cond-icon')
const caption = document.querySelector('figcaption');

function displayWeather(weatherInfo) {
temp.innerHTML = `${weatherInfo.main.temp.toFixed()}\u00B0F`;
humid.innerHTML = `Humidity:\n${weatherInfo.main.humidity.toFixed()}%`;

const iconsrc = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
const desc = weatherInfo.weather[0].description;

icon.setAttribute('src', iconsrc);
icon.setAttribute('alt', desc);
caption.textContent = desc;
}

//-----Get forecast data-----
const foreUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=21&appid=c24c8561a97560a6383a790eb1954865';
const foreElement = document.querySelector('#forecast');

async function getForecast() {
    try {
      const response = await fetch(foreUrl);
      if (response.ok) {
        const foreData = await response.json();
        console.table(foreData.list); // this is for testing the call
        displayForecast(foreData);
    } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  getForecast();

//-----Add forecast-----
const first = document.querySelector('#day1');
const second = document.querySelector('#day2');
const third = document.querySelector('#day3');
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];

function displayForecast(forecastInfo) {
    //-----1 day-----
    const foreIcon1 = `https://openweathermap.org/img/w/${forecastInfo.list[4].weather[0].icon}.png`;
    const foreDesc1 = forecastInfo.list[4].weather[0].description;
    const timestamp1 = forecastInfo.list[4].dt;
    const d1 = new Date(timestamp1 * 1000);
    const day1 = days[d1.getDay()];
    //console.log(day1);


    let d1p1 = document.createElement('p');
    let d1p2 = document.createElement('p');

    d1p1.textContent = `${forecastInfo.list[4].main.temp.toFixed()}\u00B0F`;
    d1p2.textContent = day1;

    let d1img = document.createElement('img');
    d1img.setAttribute('src', foreIcon1);
    d1img.setAttribute('alt', foreDesc1);
    
    first.appendChild(d1p2);
    first.appendChild(d1img);
    first.appendChild(d1p1);

    //-----2 day-----
    const foreIcon2 = `https://openweathermap.org/img/w/${forecastInfo.list[12].weather[0].icon}.png`;
    const foreDesc2 = forecastInfo.list[12].weather[0].description;
    const timestamp2 = forecastInfo.list[12].dt;
    const d2 = new Date(timestamp2 * 1000);
    const day2 = days[d2.getDay()];

    let d2p1 = document.createElement('p');
    let d2p2 = document.createElement('p');

    d2p1.textContent = `${forecastInfo.list[12].main.temp.toFixed()}\u00B0F`;
    d2p2.textContent = day2;

    let d2img = document.createElement('img');
    d2img.setAttribute('src', foreIcon2);
    d2img.setAttribute('alt', foreDesc2);
    
    second.appendChild(d2p2);
    second.appendChild(d2img)
    second.appendChild(d2p1);

    //-----3 day-----
    const foreIcon3 = `https://openweathermap.org/img/w/${forecastInfo.list[20].weather[0].icon}.png`;
    const foreDesc3 = forecastInfo.list[20].weather[0].description;
    const timestamp3 = forecastInfo.list[20].dt;
    const d3 = new Date(timestamp3 * 1000);
    const day3 = days[d3.getDay()];

    let d3p1 = document.createElement('p');
    let d3p2 = document.createElement('p');

    d3p1.textContent = `${forecastInfo.list[20].main.temp.toFixed()}\u00B0F`;
    d3p2.textContent = day3;

    let d3img = document.createElement('img');
    d3img.setAttribute('src', foreIcon3);
    d3img.setAttribute('alt', foreDesc3);
    
    third.appendChild(d3p2);
    third.appendChild(d3img);
    third.appendChild(d3p1);
}

//-----Last updated date & year for footer-----
const lastDate = document.querySelector('#last-update');
const year = document.querySelector('#current-year');

const date = new Date().toLocaleDateString();
lastDate.innerHTML = date;

year.innerHTML = new Date().getFullYear();
