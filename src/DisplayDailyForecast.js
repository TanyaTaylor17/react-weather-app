/** @format */

import React from "react";
import { Col } from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function DisplayDailyForecast(props) {
  function formatDays(timestamp) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentDate = new Date(timestamp);
    let day = days[currentDate.getDay()];
    return `${day}`;
  }

  return (
    <Col className="weather-forecast">
      {formatDays(props.data.dt * 1000)}
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
      <sup>°C</sup> | {Math.round((props.data.main.temp * 9) / 5) + 32}{" "}
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
