const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const div = document.querySelector(".answer");
const min_max = document.querySelector(".min_max");
const city = document.querySelector(".city");
const weather_description = document.querySelector(".weather_description");

const apifetch = function (e) {
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&unit=imperial&appid=71a3c0635b5a40f067d09782141d1df8`,
    function (data) {
      console.log(data);
      console.log(data.name);
      let icons = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      let weathers = Math.trunc(((data.main.temp - 273) * 9) / 5 + 32);
      let min = Math.trunc(((data.main.temp_min - 273) * 9) / 5 + 32);
      let max = Math.trunc(((data.main.temp_max - 273) * 9) / 5 + 32);
      let feelsLike = Math.trunc(((data.main.feels_like - 273) * 9) / 5 + 32);
      console.log(data.weather[0].main);
      weather_description.textContent = data.weather[0].main;
      city.textContent = data.name;
      weather.textContent = `${weathers}°F`;
      $(".icon").attr("src", icons);
      div.style.display = "flex";
      min_max.textContent = `Min: ${min}°F and Max: ${max}°F. It feels like ${feelsLike}°F right now`;
    }
  );
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    apifetch();
  }
});
