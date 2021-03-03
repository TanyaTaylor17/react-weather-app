/** @format */

import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "/AnimatedWeatherIcons/day.svg",
    "01n": "/AnimatedWeatherIcons/night.svg",
    "02d": "/AnimatedWeatherIcons/cloudy-day-1.svg",
    "02n": "/AnimatedWeatherIcons/cloudy-night-1.svg",
    "03d": "/AnimatedWeatherIcons/cloudy-day-2.svg",
    "03n": "/AnimatedWeatherIcons/cloudy-night-2.svg",
    "04d": "/AnimatedWeatherIcons/cloudy.svg",
    "04n": "/AnimatedWeatherIcons/cloudy.svg",
    "09d": "/AnimatedWeatherIcons/rainy-6.svg",
    "09n": "/AnimatedWeatherIcons/rainy-6.svg",
    "10d": "/AnimatedWeatherIcons/rainy-3.svg",
    "10n": "/AnimatedWeatherIcons/rainy-5.svg",
    "11d": "/AnimatedWeatherIcons/thunder.svg",
    "11n": "/AnimatedWeatherIcons/thunder.svg",
    "13d": "/AnimatedWeatherIcons/snowy-3.svg",
    "13n": "/AnimatedWeatherIcons/snowy-6.svg",
    "50d": "/AnimatedWeatherIcons/fog.svg",
    "50n": "/AnimatedWeatherIcons/fog.svg",
  };

  return <img src={codeMapping[props.code]} alt={props.alt} />;
}
