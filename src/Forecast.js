import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecastprops(props) {
  return (
    <div className="Dispaly-forecast">
      <div className="col-md-2">
        <ul>
          <li>{props.day}</li>
          <li> 1°C</li>
        </ul>
      </div>
    </div>
  );
}
