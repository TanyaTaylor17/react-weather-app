/** @format */

import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.currentTempCelsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <Container>
        <Row className="CurrentTemperatureConversion">
          <Col>
            <div className="CurrentTemp">
              <span id="current-temp">
                {Math.round(props.currentTempCelsius)}
              </span>
              <span className="units">
                °C {" | "}
                <a href="/" onClick={showFahrenheit}>
                  °F
                </a>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="pt-2" id="current-temp-details">
          <Col>
            <ul className="list-unstyled">
              <li>
                <strong>Feels Like: </strong>
                <span id="feels-like">
                  {Math.round(props.feelsLikeCelsius)}°C
                </span>
                <span className="unit" id="feels-like-unit">
                  {" "}
                </span>
              </li>
              <li>
                <strong>Max: </strong>
                <span id="max-temp">{Math.round(props.maxTempCelsius)}°C</span>
                <span className="unit" id="max-temp-unit">
                  {" "}
                </span>{" "}
              </li>
              <li>
                <strong>Min: </strong>
                <span id="min-temp">{Math.round(props.minTempCelsius)}°C</span>
                <span className="unit" id="min-temp-unit">
                  {" "}
                </span>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row className="CurrentTemperatureConversion">
          <Col>
            <span id="current-temp">{Math.round(fahrenheit())}</span>
            <span className="units">
              <a href="/" onClick={showCelsius}>
                °C
              </a>
              {" | "}
              °F
            </span>
          </Col>
        </Row>

        <Row className="pt-2" id="current-temp-details">
          <Col>
            <ul className="list-unstyled">
              <li>
                <strong>Feels Like: </strong>
                <span id="feels-like">
                  {Math.round((props.feelsLikeCelsius * 9) / 5 + 32)}°F
                </span>
                <span className="unit" id="feels-like-unit">
                  {" "}
                </span>
              </li>
              <li>
                <strong>Max: </strong>
                <span id="max-temp">
                  {Math.round((props.maxTempCelsius * 9) / 5 + 32)}°F
                </span>
                <span className="unit" id="max-temp-unit">
                  {" "}
                </span>{" "}
              </li>
              <li>
                <strong>Min: </strong>
                <span id="min-temp">
                  {Math.round((props.minTempCelsius * 9) / 5 + 32)}°F
                </span>
                <span className="unit" id="min-temp-unit">
                  {" "}
                </span>{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
