const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const div = document.querySelector(".answer");
const min_max = document.querySelector(".min_max");

btn.addEventListener("click", function (e) {
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&unit=imperial&appid=71a3c0635b5a40f067d09782141d1df8`,
    function (data) {
      console.log(data);
      let icons = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      let weathers = Math.trunc(((data.main.temp - 273) * 9) / 5 + 32);
      let min = Math.trunc(((data.main.temp_min - 273) * 9) / 5 + 32);
      let max = Math.trunc(((data.main.temp_max - 273) * 9) / 5 + 32);
      let feelsLike = Math.trunc(((data.main.feels_like - 273) * 9) / 5 + 32);
      weather.textContent = `The weather in ${data.name} is ${weathers}°F`;
      $(".icon").attr("src", icons);
      div.style.display = "flex";
      min_max.textContent = `The lowest it will be is ${min}°F and the highest it will be is ${max}°F. It feels like ${feelsLike}°F right now`;
    }
  );
});

input.addEventListener("keydown", function (e) {
  e.preventDefault;
});
