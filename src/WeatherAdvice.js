/** @format */

import React from "react";

export default function WeatherAdvice(props) {
  let temperature = props.temperature;
  let weather = props.type;
  let time = props.time;
  let day = time.includes("d");

  if (temperature >= 25 && day === true) {
    return (
      <div>
        <h5>
          Warning: It’s hot today, don’t forget to carry sunscreen and water! ☀
        </h5>
      </div>
    );
  } else if (temperature >= 25 && day !== true) {
    return (
      <div>
        <h5>Warning: It’s hot tonight, don't forget to stay hydrated! 🥤</h5>
      </div>
    );
  } else if (temperature >= 20 && day === true) {
    return (
      <div>
        <h5>Advice: It’s warm today, remember to stay hydrated! 😎</h5>
      </div>
    );
  } else if (temperature >= 20 && day !== true) {
    return (
      <div>
        <h5>Advice: It’s warm tonight, remember to stay hydrated! 🥤</h5>
      </div>
    );
  } else if (temperature <= 0 || weather === "Snow") {
    return (
      <div>
        <h5>
          Advice: Winter coat{" & "}accessories required – it’s freezing out
          there! ⛄
        </h5>
      </div>
    );
  } else if (temperature <= 5) {
    return (
      <div>
        <h5>Advice: Wrap up warm – it’s cold out there! ❄</h5>
      </div>
    );
  } else if (weather === "Rain" || weather === "Drizzle") {
    return (
      <div>
        <h5>Advice: Take an umbrella just in case! ☔</h5>
      </div>
    );
  } else if (weather === "Thunderstorm" && day === true) {
    return (
      <div>
        <h5>Warning: There are thunderstorms forecast today! 🌩</h5>
      </div>
    );
  } else if (weather === "Thunderstorm" && day !== true) {
    return (
      <div>
        <h5>Warning: There are thunderstorms forecast tonight! 🌩</h5>
      </div>
    );
  } else if (
    weather === "Mist" ||
    weather === "Smoke" ||
    weather === "Haze" ||
    weather === "Dust" ||
    weather === "Fog" ||
    weather === "Sand" ||
    weather === "Dust" ||
    weather === "Ash" ||
    weather === "Squall" ||
    weather === "Tornado"
  ) {
    return (
      <div>
        <h5>
          Warning: Potentially hazardous weather conditions – be safe and
          sensible! ⚠
        </h5>
      </div>
    );
  } else {
    return (
      <div>
        <h5>
          Advice: It's always good to be prepared - check the forecast below
          before you head out! 😊
        </h5>
      </div>
    );
  }
}
