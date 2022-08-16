let weatherIcon = document.getElementsByClassName("weather-icon");
let weatherDescription = document.getElementsByClassName("weather-description");
let weatherLocation = document.getElementsByClassName("weather-location");
let weatherDegree = document.getElementsByClassName("weather-degrees");


async function weather() {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=703187020dd586d7b25f60630a84f32e", { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);

    // get the correct weather icon to display
    if (weatherData.weather[0].main === "Clear") {
        weatherIcon[0].src = "img/sun.png";
    }
    else if (weatherData.weather[0].main === "Clouds") {
        weatherIcon[0].src = "img/cloud.png";
    }

    // get the weather description
    weatherDescription[0].innerText = weatherData.weather[0].main;

    // get weather location
    weatherLocation[0].innerHTML = weatherData.name;

    // get weather degree (conversion from Kelvin to Fahrenheit)
    weatherDegree[0].innerText = Math.round((9/5 * (weatherData.main.temp -273.15) + 32) * 10) / 10;
    weatherDegree[0].innerText += "° F"
}

weather();