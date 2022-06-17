import React, { useState } from "react";

export default function WeatherTemp(props) {
  let [unit, setUnit] = useState("celsios");
  function showCelsios(event) {
    event.preventDefault();
    setUnit("celsios");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit == "fahrenheit") {
    return (
      <div className="temperatue">
        <span className="pe-2">{Math.round((props.tempC * 9) / 5 + 32)}</span>
        <span className="temp-uint">
          <a href="/" onClick={showCelsios}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperatue">
        <span className="pe-2">{Math.round(props.tempC)}</span>
        <span className="temp-uint">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
