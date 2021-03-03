/** @format */

import React from "react";
import FormattedDateTime from "./FormattedDateTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="container">
        <div className="Current-Conditions">
          <div className="row">
            <div className="col-4" id="selected-city">
              <p>
                <br />
                <br />
                <span id="selected-city-name">
                  <strong>{props.data.city}</strong>
                </span>
                <br />
                <div className="last-updated">
                  <em>
                    <small>
                      <strong>Last Updated:</strong>
                    </small>
                  </em>
                  <br />
                  <span id="selected-city-date-time">
                    <FormattedDateTime date={props.data.date} />
                  </span>
                </div>
              </p>
            </div>

            <div className="col-4" id="current-conditions">
              <p>
                <strong>Current Conditions:</strong>
                <div className="weather-icon">
                  <WeatherIcon
                    code={props.data.icon}
                    alt={props.data.description}
                  />
                </div>
                <span id="description" className="text-capitalize">
                  <strong>{props.data.description}</strong>
                </span>
                <br />
                <span id="current-temp">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                  <span id="celsius-link" class="active">
                    °C
                  </span>{" "}
                  |<span id="fahrenheit-link">°F</span>
                </span>
              </p>
            </div>

            <div className="col-4">
              <br />
              <br />
              <ul className="weather-conditions">
                <li>
                  <strong>Humidity: </strong>
                  <span id="humidity">{props.data.humidity}</span>%
                </li>
                <li>
                  <strong>Wind: </strong>
                  <span id="wind">{props.data.wind}</span> m/s{" "}
                </li>
                <li>
                  <strong>Pressure: </strong>
                  <span id="pressure">{props.data.pressure}</span>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="row" id="current-temp-details">
            <div className="col">
              <ul className="list-unstyled">
                <li className="d-inline">
                  <strong>Feels Like: </strong>
                  <span id="feels-like">
                    {Math.round(props.data.feelsLike)}°C
                  </span>
                  <span className="unit" id="feels-like-unit">
                    {" "}
                  </span>
                </li>
                <li className="d-inline">
                  <strong>Max: </strong>
                  <span id="max-temp">{Math.round(props.data.maxTemp)}°C</span>
                  <span className="unit" id="max-temp-unit">
                    {" "}
                  </span>{" "}
                </li>
                <li className="d-inline">
                  <strong>Min: </strong>
                  <span id="min-temp">{Math.round(props.data.minTemp)}°C</span>
                  <span className="unit" id="min-temp-unit">
                    {" "}
                  </span>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
