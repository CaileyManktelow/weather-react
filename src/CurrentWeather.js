import React from "react";
import "./Current.css";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1> Currently in {props.data.city} </h1>
      <div className="dayTime">
        {" "}
        <FormattedDate date={props.data.date} />{" "}
      </div>
      <div className="currently">
        <p className="temp">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <span>{Math.round(props.data.temperature)} </span>{" "}
          <span className="unit">°C </span>
        </p>

        <ul className="conditions">
          <li>{props.data.description}</li>
          <li>Feels like: {Math.round(props.data.feelsLike)} </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind Speed: {Math.round(props.data.wind)}km/h</li>
        </ul>
      </div>
    </div>
  );
}
