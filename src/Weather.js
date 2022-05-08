import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,

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
    // const apiKey = "5f2546aa7530dc977682fdfc6556f973";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

function getCoords() {
  navigator.geolocation.getCurrentPosition(handlePosition)
}

function handlePosition(position) {
  const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
  // const apiKey = "5f2546aa7530dc977682fdfc6556f973";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let gpsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&units=metric`;
    axios.get(gpsUrl).then(handleResponse);
}

  if (weatherData.ready) {
  return (
<div>
  <div className="Weather">
      <form className="search-weather" onSubmit={handleSubmit}>
      <div className="row">
        <label className="weather-label form-label ml-3">Get your 5 Day Forecast:</label>
      </div>
      <div className="row">
        <div className="col-8">
        <input type="search" placeholder="Search for a city" onChange={changeCity} className="form-control" autoFocus="on"/>
        </div>
        <input type="submit" value="Search" className="btn btn-primary col-3 p-2 "/>
        </div>
        <div className="row">
        <div className="col m-2">
          <input
            type="button"
            defaultValue="Or...search by your location 🌎"
            id="current-location-button"
            className="current-location btn btn-outline-secondary w-100 mt-2 pe-2" onClick={getCoords}/>
        </div>
      </div>
      </form>
      </div>
     <div>
<WeatherInfo data={weatherData}/>
<WeatherForecast coordinates={weatherData.coordinates}/>
    
    </div>
    </div>
  );
} else {
  search();
  return (
    "Loading...");
  }
}
