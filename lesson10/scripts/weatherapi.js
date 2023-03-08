const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=c24c8561a97560a6383a790eb1954865'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherdata) {
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;    
    }