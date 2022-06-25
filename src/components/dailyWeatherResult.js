import React from "react";
import WeatherIcon from "./weatherIcon";


export default function DailyWeatherResult(props) {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  let currentTime = `${day} ${hours}:${minutes}`;
  console.log(props.data.wind)
  return (
    <div className="d-flex row g-3 align-items-center mt-2 mb-4">
      <div className="col-6 ps-4">
        <div>
          <p id="date-time">{currentTime}</p>
          <h3 className="text-capitalize">{props.data.city}</h3>
          <p className="text-capitalize" id="weather-condition">{props.data.condition}</p>
          <p className="temperature">
            <span id="showTemp">{props.data.temperature}º </span>
            <span id="showC">C</span>
          </p>
          <p>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </p>
          <p>
            Windspeed: <span id="wind">{props.data.wind}</span> km/hr
          </p>
        </div>
      </div>
      <div className="col">
        <div className="d-flex justify-content-end me-4">
        <WeatherIcon code={props.data.iconDay} size={100} />
        </div> 
      </div>
    </div>
  );
}
