import React, { useState } from "react";
import axios from "axios";
import "./Current.css";
import FormattedDate from "./FormattedDate";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.main.name,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <h1> Currently in {weatherData.city} </h1>
        <div className="dayTime">
          {" "}
          <FormattedDate date={weatherData.date} />{" "}
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <p className="temp">
              <span>{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </p>
          </div>
          <div className="col-md-6">
            <ul className="conditions">
              <li>{weatherData.description}</li>
              <li>Feels like: {Math.round(weatherData.feelsLike)} </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "11d5388f18b558800b7dfa9265df5c52";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>"loading..."</div>;
  }
}
