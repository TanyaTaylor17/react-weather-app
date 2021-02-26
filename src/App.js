/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <h1>What's it like outside today?</h1>
        </header>

        <WeatherSearch />

        <footer className="App-footer">
          <p>
            <small>
              <a
                href="https://github.com/TanyaTaylor17/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by{" "}
              <a
                href="https://www.linkedin.com/in/tanya-taylor/"
                target="_blank"
                rel="noreferrer"
              >
                Tanya Taylor
              </a>
              {"  & "}
              Hosted by{" "}
              <a
                href="https://patient-porcupine-1713.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
}
