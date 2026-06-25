const form = document.querySelector("form");
const input = document.querySelector("input");
const temperature = document.querySelector(".temperature");
const cityElm = document.querySelector(".city");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStats = document.querySelector(".weather-stats");
const weatherInfo = document.querySelector(".weather-info");
const feelsLike = document.querySelector(".feelsLike");
const searchLoader = document.querySelector(".search-loader");
const errorElm = document.querySelector(".error");

const showError = (message) => {
    errorElm.textContent = message;
    errorElm.classList.remove("hidden");
};

const hideError = () => {
    errorElm.textContent = "";
    errorElm.classList.add("hidden");
};

const showLoader = () => {
    searchLoader.classList.remove("hidden");
};

const hideLoader = () => {
    searchLoader.classList.add("hidden");
};

const showWeatherInfo = () => {
    weatherStats.classList.remove("hidden");
    weatherInfo.classList.remove("hidden");
}

const hideWeatherInfo = () => {
    weatherStats.classList.add("hidden");
    weatherInfo.classList.add("hidden");
}

const getWeather = async (city) => {
    try {
        showLoader();
        hideWeatherInfo();
        hideError();

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0967326189fa4af586c101651262506&q=${city}&aqi=no`);
        const data = await response.json();
        
        if (!response.ok || data.error) {
            throw new Error(data.error?.message || "Failed to fetch weather data");
        }
        
        temperature.textContent = data.current.temp_c + "°C";
        cityElm.textContent = data.location.name + ", " + data.location.country;
        description.textContent = data.current.condition.text;
        humidity.textContent = data.current.humidity + "%";
        wind.textContent = data.current.wind_kph + " km/h";
        visibility.textContent = data.current.vis_km + " km";
        weatherIcon.src = "https:" + data.current.condition.icon;
        feelsLike.textContent = data.current.feelslike_c + "°C";

        showWeatherInfo()
        input.value = "";
    } catch (error) {
        hideWeatherInfo();

        if (error.message.includes("No matching location")) {
            showError("❌ City not found. Please enter a valid city.");
        } else if (error instanceof TypeError) {
            showError("🌐 Network error. Check your internet connection.");
        } else {
            showError("⚠️ Unable to fetch weather data. Please try again.");
        }
    } finally {
        hideLoader();
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = input.value.trim();

    if (!city) {
        hideError()
        showError("⚠️ Please enter a city name.");
        hideWeatherInfo();
        return;
    }
    getWeather(city)
})
