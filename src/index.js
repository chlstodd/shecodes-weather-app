function formattedDate(date){
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday",  "Friday", "Saturday", "Sunday"];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let timestamp = `${day} ${hour}:${minutes}`
  return timestamp;
}

function fetchWeather(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-search-input");
  cityInput = `${cityInput.value}`;
  let apiKey = "43c0febtf8b9b31081fa3c7o8cde6a1a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}
function showWeather(response){
  let city = response.data.city;
  let temp = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#current-city"); 
  let currentTemp = document.querySelector("#current-temp");
currentCity.innerHTML = `${city}`; 
currentTemp.innerHTML = `${temp}`;
}

let now = new Date();
let time = document.querySelector("#current-time"); 
time.innerHTML = formattedDate(now);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", fetchWeather);

