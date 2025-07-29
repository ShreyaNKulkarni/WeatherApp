const apiKey = "777d20deb2b5c631062da4195b4335e7";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      weatherInfo.innerHTML = `
        <strong>${data.name}</strong><br />
        Temperature: ${temperature} °C<br />
        Description: ${description}<br />
        Humidity: ${humidity}%<br />
        Wind Speed: ${wind} m/s
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = "Error: " + error.message;
    });
}
