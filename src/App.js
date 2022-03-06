import "./App.css";
import Search from "./Search";

import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from "./Forecast";

export default function App() {
  const day = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  return (
    <div className="App">
      <div className="container">
        <Search />

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
          </div>{" "}
          <div className="col-2">
            <Forecast day={day[5]} />
          </div>{" "}
          <div className="col-2">
            <Forecast day={day[6]} />
          </div>
        </div>
      </div>
    </div>
  );
}
