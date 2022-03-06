import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("montreal");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  function getForecast(coord) {
    let apiKey = "11d5388f18b558800b7dfa9265df5c52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    console.log({ response });
    setWeather(
      <div className="row">
        <div className="city">Currently in {response.data.name}</div>
        <div className="col-6">
          <div>
            {" "}
            {Math.round(response.data.main.temp)}°C{" "}
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={`weather icon ${response.data.weather[0].description}`}
            />
          </div>
        </div>
        <div className="col-6">
          <ul className="currentWeather">
            <li> Description: {response.data.weather[0].description} </li>
            <li> humidity: {Math.round(response.data.main.humidity)}% </li>
            <li> wind: {Math.round(response.data.wind.speed)} km/h </li>
          </ul>
        </div>
      </div>
    );
    {
      getForecast(response.data.coord);
    }
  }

  function displayForecast(response) {
    console.log({ response });
    setForecast(
      <div>
        <ul>
          <li>{Math.round(response.data.daily[0].temp.max)}</li>
        </ul>
      </div>
    );
  }

  function getWeather(event) {
    event.preventDefault();
    let apiKey = "11d5388f18b558800b7dfa9265df5c52";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(displayWeather);
  }
  return (
    <div className="Search">
      <form onSubmit={getWeather}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <div> {weather} </div>
      <div>{forecast}</div>
    </div>
  );
}
