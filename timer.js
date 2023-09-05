const API_KEY = `3a3c93a4d5aa7a56f0c9863f973d0e2e`;

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const imgUrl = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.`;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a3c93a4d5aa7a56f0c9863f973d0e2e&units=metric
  `;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h1>City not found<h1/>`;
    return;
  }
  weather.innerHTML = `
    <div class="card-header" id="weather">
      <span>

      </span>
      <span>${data.weather[0].main}</span>

      <span class="temp">${data.main.temp}°C</span>

      <div class="temp-scale">
        <span>Celcius</span>
      </div>
    </div>`;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
