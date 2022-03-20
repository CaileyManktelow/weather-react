import "./App.css";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />
      </div>
      <footer>
        open sourced on{" "}
        <a
          href="https://github.com/CaileyManktelow/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        by Cailey Manktelow{" "}
      </footer>
    </div>
  );
}
