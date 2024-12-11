// Select HTML Elements in the document
const myTown = document.querySelector('#town');
// const myTown = document.getElementById('town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// Create requied variables for the URL
const myKey = "ec5449fc2589ce0e06e8fe64307db2da"
const myLat = "40.2968"
const myLong = "-111.695560"

// construch a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// Try to grab the current weather data
async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
// display the Jason data onto my web page
function displayResults(data) {
  console.log()
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  // myDescription.innerHTML = '<strong>Description</strong>: ${data.weather[0].description}';
  myTemperature.innerHTML = `${data.main.temp}&deg;F`;
  
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // try {
    //   const response = await fetch(iconsrc);
    //   if (response.ok) {
    //     const data = await response.json();

    //     displayResults(data); 
    //   } else {
    //       throw Error(await response.text());
    //   }
    // } catch (error) {
    //     console.log(error);
    // }
  myGraphic.setAttribute('src', iconsrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
  // displayResults(iconsrc);
}

function updateForecast(data) {
    const forecastContent = document.getElementById('card');
    forecastContent.innerHTML = ''; // Clear existing content

    // Get the next 3 days of forecast (excluding today)
    const threeDayForecast = data.list.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        const today = new Date();
        return itemDate.getDate() !== today.getDate() && itemDate.getHours() === 12; // Noon forecast
    }).slice(0, 3);

    threeDayForecast.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const temp = Math.round(day.main.temp);
        const icon = day.weather[0].icon;

        const dayElement = document.createElement('div');
    dayElement.classList.add('forecast-day');
    dayElement.innerHTML = `
        <div class="forecast-item">
            <span>${dayName}</span>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
            <span>${temp}°C</span>
        </div>
    `;
    forecastContent.appendChild(dayElement);
    });
}
  
apiFetch();
