import React, { useState } from "react";
import axios from "axios";

export default function App(props) {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let units = "metric";
    let apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form className="Weather" onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={showCity} />
        <input type="submit" value="Search" />
      </form>
      {wind !== null ? (
        <ul>
          <li>
            {temperature !== null ? `Temperature: ${temperature} °C` : ""}
          </li>
          <li>{description !== null ? `Description: ${description}` : ""}</li>
          <li>{humidity !== null ? `Humidity: ${humidity}%` : ""}</li>
          <li>{wind !== null ? `Wind: ${wind} m/s` : ""}</li>
          <li>
            {icon !== null ? <img src={icon} alt="current weather icon" /> : ""}
          </li>{" "}
        </ul>
      ) : (
        " "
      )}
    </div>
  );
}
