import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature me-1">{Math.round(props.celsius)}º</span>
        <span className="metric-imperial-btn me-1 temp-active" onClick={showCelsius}>
          C
        </span>
        <span className="divider">|</span>
        <span className="ms-1 metric-imperial-btn" onClick={showFarenheit}>
          F
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature me-1">{Math.round(farenheit)}º</span>
        <span className="metric-imperial-btn me-1" onClick={showCelsius}>
          C
        </span>
        <span className="divider">|</span>
        <span className="ms-1 metric-imperial-btn temp-active" onClick={showFarenheit}>
          F
        </span>
      </div>
    );
  }
}
