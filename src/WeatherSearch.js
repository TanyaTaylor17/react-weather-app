/** @format */

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `771f97361711452c12e62a313b27bcc9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentWeather = (
    <div className="container">
      <div className="Current-Conditions">
        <div className="row">
          <div className="col-4" id="selected-city">
            <p>
              <br />
              <br />
              <span id="selected-city-name">
                <strong>{weather.city}</strong>
              </span>
              <br />
              <div className="last-updated">
                <em>
                  <small>
                    <strong>Last Updated:</strong>
                  </small>
                </em>
                <br />
                <span id="selected-city-date">
                  {day} {date} {month} {year}
                </span>
                <br />
                <span id="selected-city-time">
                  {hours}:{minutes}
                </span>
              </div>
            </p>
          </div>

          <div className="col-4" id="current-conditions">
            <p>
              <strong>Current Conditions:</strong>
              <div className="weather-icon">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  id="weather-icon"
                />
              </div>
              <span id="description" className="text-capitalize">
                <strong>{weather.description}</strong>
              </span>
              <br />
              <span id="current-temp">{Math.round(weather.temperature)}</span>
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
                <span id="humidity">{weather.humidity}</span>%
              </li>
              <li>
                <strong>Wind: </strong>
                <span id="wind">{weather.wind}</span> m/s{" "}
              </li>
              <li>
                <strong>Pressure: </strong>
                <span id="pressure">{weather.pressure}</span>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="row" id="current-temp-details">
          <div className="col">
            <ul className="list-unstyled">
              <li className="d-inline">
                <strong>Feels Like: </strong>
                <span id="feels-like">{Math.round(weather.feelsLike)}°C</span>
                <span className="unit" id="feels-like-unit">
                  {" "}
                </span>
              </li>
              <li className="d-inline">
                <strong>Max: </strong>
                <span id="max-temp">{Math.round(weather.maxTemp)}°C</span>
                <span className="unit" id="max-temp-unit">
                  {" "}
                </span>{" "}
              </li>
              <li className="d-inline">
                <strong>Min: </strong>
                <span id="min-temp">{Math.round(weather.minTemp)}°C</span>
                <span className="unit" id="min-temp-unit">
                  {" "}
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  let form = (
    <div className="container">
      <div className="City-Search">
        <form
          onSubmit={handleSubmit}
          id="city-search"
          className="row align-items-center"
        >
          <div className="col">
            <input
              type="search"
              id="searched-city-name"
              placeholder="Enter city here"
              className="form-control"
              autocomplete="off"
              onChange={updateQuery}
            />
          </div>
          <div className="col btn-group">
            <input
              type="submit"
              id="city-search"
              className="btn btn-block btn-outline-primary btn-sm text-wrap"
              value="🔍 Search Any Location"
            />
            <div />

            <input
              type="submit"
              id="current-location"
              class="btn btn-block btn-outline-success btn-sm text-wrap"
              value="📍 My Current Location"
            />
          </div>
        </form>
      </div>
    </div>
  );

  if (weather.loaded) {
    return (
      <div>
        {form}
        {currentWeather}
      </div>
    );
  } else {
    let apiKey = `771f97361711452c12e62a313b27bcc9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);

    return (
      <Loader
        type="ThreeDots"
        color="#5d54a4"
        height={80}
        width={80}
        timeout={4000}
      />
    );
  }
}
