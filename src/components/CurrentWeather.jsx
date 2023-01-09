import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleClick() {
    if (city === null || city === "") {
      return;
    }

    // WARN: NEVER EVER store your api keys in your source code
    // Youse your environemnt for that, process.env or in case of firebae deployment [secret parameters](https://firebase.google.com/docs/functions/config-env#secret_parameters)
    const apiKey = "854e09de099a5dd32d428062a572a45f";
    const unit = "metric";
    const lang = "de";
    // NOTE: A template literal would be much more easy to read than string concatenation
    const _exampleTemplateLiteral = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}&lang=${lang}`;

    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=" +
      unit +
      "&lang=" +
      lang;

    // NOTE: Comparing template literal and concatenated string
    console.log(_exampleTemplateLiteral === apiUrl);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          return;
        } else {
          setWeather(data);
        }
      });

    // NOTE this value is not available at the time of loging it, your handle click is a synchrounus function, the fetch method will return a promise immidieately after beeing called, the handleClick execution resumes without waiting for the resolved fetch... rendering the data does work, because you only update the local state after the promise has resolved -> move the console log into the else block of your fetch or use async/await as mentioned in `Jokes.jsx`
    console.log(weather.weather);
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
      <button onClick={handleClick}>
        <span>Go!</span>
      </button>
      {weather && (
        <div>
          <h2>Temperatur: {weather.main.temp} C</h2>
          <h2> {weather.weather[0].description}</h2>
          <div>
            {/* NOTE: There are multiple issues here, the image will not receive the weatherIcon properties on a slow internet connection and that error is not really handled (fallback image/loading spinner) furthermore it is not really necessary to pass the src url where you concatenate the icon onto, as that always happens in the component you should scope it to the component */}
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
