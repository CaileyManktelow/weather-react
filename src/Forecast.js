import React from "react";
import "./Forecast.css";

export default function Forecast() {
  const day = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="Dispaly-forecast">
      <div className="row">
        <div className="col-md-2">
          <ul>
            <li>{day[0]}</li>
            <li></li>
            <li> 1° - 5°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
