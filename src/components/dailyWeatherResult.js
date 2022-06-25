import React from "react";


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

  return (
    <div className="d-flex row g-3 align-items-center mt-2 mb-3">
      <div className="col-6 ps-4">
        <div>
          <p id="date-time">{currentTime}</p>
          <h3 className="text-capitalize">{props.city}</h3>
          <p className="text-capitalize" id="weather-condition">{props.condition}</p>
          <p className="temperature">
            <span id="showTemp">{props.temperature}º </span>
            <span id="showC">C</span>
          </p>
          <p>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </p>
          <p>
            Windspeed: <span id="wind">{props.wind}</span> km/hr
          </p>
        </div>
      </div>
      <div className="col-6">
        <div className="mx-auto">
          <img
            src={props.icon}
            alt={props.description}
            id="icon"
            className="float-left weather-icon"
            width="100px"
          />
        </div>
      </div>
    </div>
  );
}
