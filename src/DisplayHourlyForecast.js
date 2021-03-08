/** @format */

import React from "react";
import { Col } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";

export default function DisplayHourlyForecast(props) {
  function formatHours(timestamp) {
    let currentDate = new Date(timestamp);
    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  return (
    <Col className="weather-forecast">
      {formatHours(props.data.dt * 1000)}
      <br />
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <br />
      <span className="text-capitalize">
        {props.data.weather[0].description}
      </span>
      <br />
      {Math.round(props.data.main.temp)}
      <sup>°C</sup> | {Math.round((props.data.main.temp * 9) / 5) + 32}
      <sup>°F</sup>
      <br />
      <br />
      <small>
        Feels Like: {Math.round(props.data.main.feels_like)}
        <sup>°C</sup> | {Math.round((props.data.main.feels_like * 9) / 5) + 32}
        <sup>°F</sup>
      </small>
    </Col>
  );
}
