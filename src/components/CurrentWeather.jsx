import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [buttonColor, setButtonColor] = useState(false);

  function handleClick() {
    if (city === null || city === "") {
      return;
    }
    const apiKey = process.env.REACT_APP_API_KEY;
    const unit = "metric";
    const lang = "de";
    // const apiUrl =
    //   "https://api.openweathermap.org/data/2.5/weather?q=" +
    //   city +
    //   "&appid=" +
    //   apiKey +
    //   "&units=" +
    //   unit +
    //   "&lang=" +
    //   lang;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}&lang=${lang}`;
    fetch(weatherURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          return;
        } else {
          setWeather(data);
        }
      });
  }
  function mouseOver() {
    setButtonColor(true);
  }
  function mouseOut() {
    setButtonColor(false);
  }

  return (
    <div className="custom-container-Weather form Current-Weather">
      <div className="heading">
        <h1>Current Weather</h1>
      </div>

      <input
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      ></input>
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{
          backgroundColor: buttonColor === true ? "black" : "transparent",
        }}
        onClick={handleClick}
      >
        <span>Go!</span>
      </button>
      {weather && (
        <div>
          <h2>Temperatur: {weather.main.temp} C</h2>
          <h2> {weather.weather[0].description}</h2>
          <div>
            <WeatherIcon
              weatherIcon={weather.weather[0].icon}
              src="https://openweathermap.org/img/wn/"
            />
          </div>
          <h2>Windgeschwindigkeit: {weather.wind.speed}m/s</h2>
        </div>
      )}
    </div>
  );
}
