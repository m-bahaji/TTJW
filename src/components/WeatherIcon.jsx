import React from "react";

export default function WeatherIcon(props) {
  const weatherIconImage = `https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`;

  return (
    <img className="iconSize rcorners1" src={weatherIconImage} alt="icon"></img>
  );
}
