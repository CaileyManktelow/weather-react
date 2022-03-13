import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span className="Temperature">
        <span>{Math.round(props.celciusTemp)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F{" "}
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = (props.celciusTemp * 9) / 5 + 32;
    return (
      <span className="Temperature">
        <span>{Math.round(fahrenheitTemp)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={showCelcius}>
            C{" "}
          </a>{" "}
        </span>
      </span>
    );
  }
}
