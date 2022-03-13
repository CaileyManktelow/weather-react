import React from "react";
import Temperature from "./Temperature";
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
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <p className="temp">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <Temperature celciusTemp={props.data.temperature} />{" "}
          </p>
        </div>
        <div className="col-md-6">
          <ul className="conditions">
            <li>{props.data.description}</li>
            <li>Feels like: {Math.round(props.data.feelsLike)} </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
