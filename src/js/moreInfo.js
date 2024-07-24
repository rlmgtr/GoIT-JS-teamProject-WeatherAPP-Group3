document.addEventListener('DOMContentLoaded', function () {
    const apiKey = "31328a08c8eed36865b9c197e848a2e0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
  
    async function checkWeather(city) {
      try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
  
        console.log(data);
  
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + "°";
        document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max) + "°";
  
        switch (data.weather[0].main) {
          case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
          case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
          case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
          case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
          case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
          default:
            weatherIcon.src = ""; // Default image or leave it empty
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not retrieve weather data. Please try again.');
      }
    }
  
    if (searchBtn && searchBox) {
      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });
    } else {
      console.error('Search button or search input not found');
    }
  });
  