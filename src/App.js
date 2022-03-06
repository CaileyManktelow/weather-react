import "./App.css";
import Search from "./Search";
import Current from "./Current";
import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
        <Forecast />
      </div>
    </div>
  );
}
