//Date & Time

function formatDate(){
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let currentDay = days[now.getDay()];
  let displayDay = `${currentDay}`;
  return displayDay
}

function formatTime(){
  let nowTime = new Date();
  let hours = nowTime.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  let minutes = nowTime.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }

  let currentTime = `${hours}:${minutes}`
  return currentTime
}


let weekDay = formatDate();
let weekDayDisplay = document.querySelector("h2#day");
weekDayDisplay.innerHTML = weekDay;

let timeNow = formatTime();
let timeNowDisplay = document.querySelector("h2#time");
timeNowDisplay.innerHTML = timeNow;

// Icon changes




// Celcius and Fahrenheit Conversion

function showCelsius(event){
  event.preventDefault();
  let currentCelsiusTemp = document.querySelector("h3#temp");
  currentCelsiusTemp.innerHTML = Math.round(celsiusTemp);
  }

function showFahrenheit(event){
  event.preventDefault();
  let currentFahrenheitTemp = document.querySelector("h3#temp");
  currentFahrenheitTemp.innerHTML = Math.round((celsiusTemp * 9) / 5 + 32);
  }

let toCelsius = document.querySelector("#celsius");
toCelsius.addEventListener("click", showCelsius);

let toFahrenheit = document.querySelector("#fahrenheit");
toFahrenheit.addEventListener("click", showFahrenheit);

let celsiusTemp = null;


// Change Temperature with City Search

function displayWeather(response){
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("h3#temp").innerHTML = Math.round(celsiusTemp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity + "%";
  document.querySelector("#winds").innerHTML = response.data.wind.speed + " km/h";
  document.querySelector("#weather-description").innerHTML = response.data.weather[0].main;

  celsiusTemp = response.data.main.temp;
}

function searchCity(city) {
  let apiKey = "f8da540cbadec070f67f3f54a6f1afb1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

function showCity(event){
  event.preventDefault();
  let cityInput = document.querySelector("#search-bar").value;
  searchCity(cityInput);
}

function searchLocation(position){
  let apiKey = "f8da540cbadec070f67f3f54a6f1afb1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getCurrentLocation);

searchCity("Cambridge");



















