import React from "react";

export default function ForecastData(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.data[0].weather[0].icon}@2x.png`;

  function MaxTemp() {
    let temperature = Math.round(props.data[0].temp.max);
    return `${temperature}°`;
  }

  function MinTemp() {
    let temperature = Math.round(props.data[0].temp.min);
    return `${temperature}°`;
  }

  function Day() {
    let date = new Date(props.data[0].dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastData">
      <div className="col">
        <div className="forecast-day">
          <Day />
        </div>
        <img className="forecast-icon" src={iconUrl} alt="icon" />
        <div className="forecast-temp">
          <span className="forecast-high">
            <MaxTemp />
          </span>
          <span className="forecast-low">
            <MinTemp />
          </span>
        </div>
      </div>
    </div>
  );
}
