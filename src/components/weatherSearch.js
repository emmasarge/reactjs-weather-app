import React, { useState } from "react";
import axios from "axios";
import DailyWeatherResult from "./dailyWeatherResult";
import WeatherForecast from "./weatherForecast";
import { TailSpin } from "react-loader-spinner";

export default function WeatherSearch(props) {
    const [weather, setWeather] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);


  function displayWeather(response) {
    setWeather({
      ready: true,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconDay: response.data.weather[0].icon,
    });
  }
  function showCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let key = "5f472b7acba333cd8a035ea85a0d4d4c";
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
      axios.get(url).then(displayWeather);
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather" onLoad={showCity}>
         <form onSubmit={handleSubmit} className="row g-3 align-items-center">
      <div className="col">
        <input
          type="text"
          id="search-input"
          className="form-control"
          placeholder="search city"
          onChange={updateCity}
        />
      </div>
      <div className="col">
        <input
          type="submit"
          className="btn px-5 w-100"
          id="search-btn"
          value="search"
        
        />
      </div>
      <div className="col">
        <button className="btn w-100" id="location-btn" onClick={showCity}>
          current location
        </button>
      </div>
    </form>
        <DailyWeatherResult data={weather}/>
        <WeatherForecast coordinates={weather.coordinates} data={weather} />
      </div>
    );
  } else {
    search();
    <div>
      <div className="mt-4 text-center">
        Loading...
        <div className="spinner my-3">
          <TailSpin color="grey" height={40} width={40} />
        </div>
      </div>
    </div>;
  }
}
