import React, { useState } from "react";
import "./Search.css";
import axios from "react-axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    console.log({ response });
    setWeather(
      <ul className="currentWeather">
        <li> Temperature: {Math.round(response.data.main.temp)}°C </li>
        <li> Description: {response.data.weather[0].description} </li>
        <li> humidity: {Math.round(response.data.main.humidity)}% </li>
        <li> wind: {Math.round(response.data.wind.speed)} km/h </li>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={`weather icon ${response.data.weather[0].description}`}
          />{" "}
        </li>
      </ul>
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
      <h3> {weather} </h3>
    </div>
  );
}
