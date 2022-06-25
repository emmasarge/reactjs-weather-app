import React, { useState } from "react";
import axios from "axios";
import DailyWeatherResult from './dailyWeatherResult';

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2de1414d2167da92d347476a4e1097e6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
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
        <button className="btn w-100" id="location-btn">
          current location
        </button>
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <DailyWeatherResult
          city={city}
          temperature={Math.round(weather.temperature)}
          condition={weather.description}
          humidity={weather.humidity}
          wind={weather.wind}
          icon={weather.icon}
        />
      </div>
    );
  } else {
    return (<div>{form}<div className="mt-4 text-center">Loading...</div></div>
    );
  }
}
