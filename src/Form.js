import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Weather() {
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
    <div>
   <form className="search-weather" onSubmit={handleSubmit}>
      <div className="row">
        <label className="form-label ml-3">Get your 5 Day Forecast:</label>
      </div>
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            id="city-input"
            className="form-control"
            placeholder="Search for a city..."
            autoFocus onChange={showCity} />
        </div>
        <input
          type="submit"
          id="search"
          value="Search"
          className="btn btn-primary col-3 " onSubmit={handleSubmit} />
      </div>
      <div className="row">
        <div clasName="col-4 m-2">
          <input
            type="click"
            value="Your location 🌎"
            id="current-location-button"
            className="btn btn-success w-30 mt-2" />
        </div>
      </div>
    </form>
 
    <div className="container-location">
      <div className="row">
        <div className="col-6">
          <h4 className="day">Thursday</h4>
          <div className="row">
            <ul>
              <li>
                <span id="date"></span>
              </li>
            </ul>
          </div>
          <ul>
            <li className="last-updated">
              <span>
                <em>5 May, 2022</em>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
    {wind !== null ? 
    <ul>
      <h2>{city}</h2>
      <span><h4>{temperature !== null ? `${temperature} °` : ""}</h4><span className="units"><button href="/" className="btn btn-light btn-lg active m-2" aria-pressed="true">C</button><button href="/" className="btn btn-light btn-lg m-2" aria-pressed="false" >/F</button></span></span>
      <li>{temperature !== null ? `Temperature: ${temperature} °C` : ""}</li>
      <li>{description !== null ? `Description: ${description}` : ""}</li>
      <li>{humidity !== null ? `Humidity: ${humidity}%` : ""}</li>
      <li>{wind !== null ? `Wind: ${wind} m/s` : ""}</li>
      <li>{icon !== null ? <img src={icon} alt="current weather icon" /> : ""}</li>
      </ul> : " "}
        </div>

  )};