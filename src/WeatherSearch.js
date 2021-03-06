/** @format */

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherData from "./WeatherData";
import WeatherAdvice from "./WeatherAdvice";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function search() {
    let apiKey = `771f97361711452c12e62a313b27bcc9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      type: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
    });
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function getCurrentCoords(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentCoords);
  }

  function showCurrentCoords(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "771f97361711452c12e62a313b27bcc9";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
    axios
      .get(
        `${apiUrl}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      )
      .then(handleResponse);
  }

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
              autoComplete="off"
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
              type="button"
              id="current-location"
              className="btn btn-block btn-outline-success btn-sm text-wrap"
              value="📍 My Current Location"
              onClick={getCurrentCoords}
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
        <WeatherData data={weather} />
        <WeatherAdvice data={weather} />
        <WeatherForecast query={weather.city} />
      </div>
    );
  } else {
    search();
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
