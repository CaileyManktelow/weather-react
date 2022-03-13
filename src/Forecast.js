import React from "react";
import "./Forecast.css";
import axios from "axios";
export default function Forecast(props) {
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "11d5388f18b558800b7dfa9265df5c52";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  function handleResponse(response) {
    console.log(response);
  }

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Mon</div>
          <img
            className="forecast-icon"
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="icon"
          />
          <div className="forecast-temp">
            <span className="forecast-high">5</span>
            <span className="forecast-low">-3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
