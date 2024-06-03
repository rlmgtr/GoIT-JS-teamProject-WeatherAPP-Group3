const apiKey = "31328a08c8eed36865b9c197e848a2e0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_min) + "°";
    document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_max)  + "°";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
