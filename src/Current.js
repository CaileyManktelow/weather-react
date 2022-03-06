import React from "react";
import "./Current.css";

export default function Current() {
  let weatherData = {
    city: "Montreal",
    day: "Tuesday 2:25",
    feelsLike: "-4 °C",
    humidity: "65 %",
    wind: "5 km/h",
  };
  return (
    <div className="Current">
      <h1> Currently in {weatherData.city} </h1>
      <div className="dayTime"> {weatherData.day} </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <p className="temp">
            <span>1</span>
            <span className="unit">°C</span>
          </p>
        </div>
        <div className="col-md-3">
          <ul className="conditions">
            <li>Feels like: {weatherData.feelsLike} </li>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind Speed:{weatherData.wind} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
