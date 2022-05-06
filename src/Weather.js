import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState("vilankulos");
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    date: "Wednesday 07:00",
    wind: response.data.wind.speed,
    icon:
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

  });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
  search();
}
  function changeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const units = "metric";
    const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
  return (
<div>
  <div className="Weather">
      <form className="search-weather" onSubmit={handleSubmit}>
      <div className="row">
        <label className="form-label ml-3">Get your 5 Day Forecast:</label>
      </div>
      <div className="row">
        <div className="col-8">
        <input type="search" placeholder="Search for a city" onChange={changeCity} className="form-control" autoFocus="on"/>
        </div>
        <input type="submit" value="Search" className="btn btn-primary col-3 "/>
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
      </div>
     <div>

  <div className="Please Work Container">
  <div className="weather-forecast-day">
      <div className="row">
      <div className="col-6">
            <h4 className="day">{weatherData.date}</h4>
            <ul>
  <li className="last-updated"><span><em>Last updated: 13:35</em></span></li>
            <h2 className="user-city">
              <span>
                <strong>{weatherData.city}</strong>
              </span>
            </h2>
            <br />
            <a className="celcius-temp" href="/">
              {weatherData.temperature}°
            </a>
            <span className="units">
              <button
                href="/"
                className="btn btn-light btn-lg active"
                aria-pressed="true"
              >
                C
              </button>
              <button
                href="/"
                className="btn btn-light btn-lg"
                aria-pressed="false"
              >
                / F
              </button>
            </span>
          </ul>

      </div> 
  <div className="col-6">
  <div className= "weather-conditions">
        <ul>
        <li><img src={weatherData.icon} alt="current weather icon" className="float-top" /></li>
          <li>Temperature: {weatherData.temperature} °C</li>
          <li>Description: {weatherData.descriptiondescription}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} m/s</li>
        </ul>
        </div>
        </div>
    </div>
    </div>
    </div> 
    </div>
    </div>
  );
} else {
  search();
  const units = "metric";
    const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  return (
    "Loading"

  )
    ;}
}
