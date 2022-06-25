import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function icon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return <img src={icon} width="70" alt={props.data.description}  className="forecast-img"/>;
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
      <div className="mx-auto">{icon()}</div>
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
