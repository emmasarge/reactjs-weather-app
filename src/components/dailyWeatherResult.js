import React, { useState } from "react";
import WeatherIcon from "./weatherIcon";

export default function DailyWeatherResult(props) {
  let [showMetric, setFarenheit] = useState(true);
  let [celsius, setShowFarenheit] = useState(props.data.temperature);
  let [metric, setImperial] = useState("Show imperial");
  let [metricSymbol, setImperialSymbol] = useState("C");

  function showFarenheit() {
    setShowFarenheit(Math.round(props.data.temperature * (9 / 5) + 32));
    setImperial("Show metric");
    setImperialSymbol("F");
    setFarenheit(false);
  }
  function showCelsius() {
    setShowFarenheit(props.data.temperature);
    setImperial("Show imperial");
    setImperialSymbol("C");
    setFarenheit(true);
  }

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
    "Saturday",
  ];
  let day = days[dayIndex];
  let currentTime = `${day} ${hours}:${minutes}`;

  return (
    <div className="d-flex row g-3 align-items-center mt-2 mb-4">
      <div className="col-6 ps-4">
        <div>
          <p id="date-time">{currentTime}</p>
          <h3 className="text-capitalize">{props.data.city}</h3>
          <p className="text-capitalize" id="weather-condition">
            {props.data.condition}
          </p>

          <div>
            <p className="temperature">
              <span>{celsius}º </span>
              <span>{metricSymbol}</span>
            </p>
            {showMetric && <p className="metric-imperial-btn" onClick={showFarenheit}>{metric}</p>}{" "}
            {!showMetric && <p className="metric-imperial-btn" onClick={showCelsius}>{metric}</p>}
          </div>
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
