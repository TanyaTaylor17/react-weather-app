/** @format */

import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import DisplayHourlyForecast from "./DisplayHourlyForecast";
import DisplayDailyForecast from "./DisplayDailyForecast";
import { Container, Row, Col } from "react-bootstrap";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function forecastSearch() {
    let apiKey = `771f97361711452c12e62a313b27bcc9`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.query}&units=metric&appid=${apiKey}`;
    axios.get(`${apiUrl}`).then(handleForecastResponse);
  }

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.query === forecast.city.name) {
    return (
      <div className="weather-forecast" id="forecast">
        <Container>
          <Row id="hourly-forecast-header">
            <Col id="forecast-header">Hourly Forecast</Col>
          </Row>
          <Row className="hourly-forecast">
            <DisplayHourlyForecast data={forecast.list[0]} />
            <DisplayHourlyForecast data={forecast.list[1]} />
            <DisplayHourlyForecast data={forecast.list[2]} />
            <DisplayHourlyForecast data={forecast.list[3]} />
            <DisplayHourlyForecast data={forecast.list[4]} />
          </Row>
          <br />
          <hr />
          <Row id="daily-forecast-header">
            <Col id="forecast-header">5 Day Forecast</Col>
          </Row>
          <Row className="daily-forecast">
            <DisplayDailyForecast data={forecast.list[0]} />
            <DisplayDailyForecast data={forecast.list[8]} />
            <DisplayDailyForecast data={forecast.list[16]} />
            <DisplayDailyForecast data={forecast.list[24]} />
            <DisplayDailyForecast data={forecast.list[32]} />
          </Row>
        </Container>
      </div>
    );
  } else {
    forecastSearch();
    return (
      <Loader
        type="ThreeDots"
        color="#5d54a4"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}
