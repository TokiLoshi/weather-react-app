import React, { useState } from "react";
import axios from "axios";
import "./App.css";
// import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
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
        <input type="submit" value="Search" className="btn btn-primary col-3 ms-4 "/>
        </div>
        <div className="row">
        <div clasName="col-6 m-2">
          <input
            type="click"
            value="🌎 Or...search by your location 🌎"
            id="current-location-button"
            className="btn btn-outline-secondary w-100 mt-2 pe-2" onClick={setCity(props.defaultCity)}/>
        </div>
      </div>
      </form>
      </div>
     <div>
<WeatherInfo />
    
    </div>
    </div>
  );
} else {
  search();

  // const units = "metric";
  //   const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
  //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
  //   axios.get(apiUrl).then(handleResponse);

  return (

    "Loading..."

  )
    ;}
}
