//weather
function getWeather() {
    const city = document.getElementById("citySelect").value;
    if (!city) {
      return;
    }
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfoDiv = document.getElementById("weatherInfo");
        weatherInfoDiv.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Current Temperature: ${(data.main.temp - 273.15).toFixed(
                  1
                )}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Weather Description: ${data.weather[0].description}</p>
            `;
      })
      .catch((error) => {
        const weatherInfoDiv = document.getElementById("weatherInfo");
        weatherInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  








  







  