/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import FormattedDateTime from "./FormattedDateTime";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <Container>
        <div className="Current-Conditions">
          <Row>
            <Col id="selected-city">
              <br />
              <br />
              <span id="selected-city-name">
                <strong>{props.data.city}</strong>
              </span>
              <br />
              <span className="last-updated">
                <em>
                  <small>
                    <strong>Last Updated:</strong>
                  </small>
                </em>
                <br />
                <span id="selected-city-date-time">
                  <FormattedDateTime date={props.data.date} />
                </span>
              </span>
            </Col>

            <Col id="current-conditions">
              <div>
                <strong>Current Conditions:</strong>

                <div className="weather-icon">
                  <WeatherIcon
                    code={props.data.icon}
                    alt={props.data.description}
                  />
                </div>

                <span id="description" className="text-capitalize">
                  {props.data.description}
                </span>
              </div>
            </Col>

            <Col>
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
            </Col>
          </Row>

          <TemperatureConversion
            currentTempCelsius={props.data.temperature}
            maxTempCelsius={props.data.maxTemp}
            minTempCelsius={props.data.minTemp}
            feelsLikeCelsius={props.data.feelsLike}
          />
        </div>
      </Container>
    </div>
  );
}
