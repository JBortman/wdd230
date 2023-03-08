/* -----Get date for hidden message----- */
const d = new Date().getDay();
//console.log(d); //-----troubleshooting
if (d == 1 || d == 2){
    document.getElementById('meeting').hidden = false;
}
else {
    document.getElementById('meeting').hidden = true;
};


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

// -----Weather API-----
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Pioche&units=imperial&appid=c24c8561a97560a6383a790eb1954865';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        calculateChill(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

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
