import React from "react";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Forecast(props) {
  return (
    <div className="Dispaly-forecast">
      <ul>
        <li>{props.day}</li>
        <li> 1°C</li>
      </ul>
    </div>
  );
}
