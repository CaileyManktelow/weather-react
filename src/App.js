import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Current from "./Current";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const day = [
    "Monday",
    "tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
        <div className="row">
          <div className="col-2">
            <Forecast day={day[0]} />
          </div>
          <div className="col-2">
            <Forecast day={day[1]} />
          </div>
          <div className="col-2">
            <Forecast day={day[2]} />
          </div>
          <div className="col-2">
            <Forecast day={day[3]} />
          </div>
          <div className="col-2">
            <Forecast day={day[4]} />
          </div>
        </div>
      </div>
      <span>
        open sourced on{" "}
        <a
          href="https://github.com/CaileyManktelow/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        by Cailey Manktelow{" "}
      </span>
    </div>
  );
}
