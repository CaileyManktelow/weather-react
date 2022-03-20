import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastData from "./ForecastData";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastData data={forecastData[0]} />
          <ForecastData data={forecastData[1]} />
          <ForecastData data={forecastData[2]} />
          <ForecastData data={forecastData[3]} />
          <ForecastData data={forecastData[4]} />
          <ForecastData data={forecastData[5]} />
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = "11d5388f18b558800b7dfa9265df5c52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
