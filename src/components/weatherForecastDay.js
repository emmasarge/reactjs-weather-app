import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="w-full my-3">
      <div className="text-center weather-forecast-date">{day()}</div>
      <div className="d-flex justify-content-center my-1"><WeatherIcon code={props.data.weather[0].icon} size={36} /></div>
      <div className=" text-center">
        <div className="weather-forecast-temperature-max">
         Hi {maxTemperature()}
        </div>
        <div className="weather-forecast-temperature-min">
          Lo {minTemperature()}
        </div>
      </div>
    </div>
  );
}
