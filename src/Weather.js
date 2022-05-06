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
    <div className="Weather">
      <h1>Weather App</h1>
      <form className="search-weather" onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={changeCity} className="form-control" autoFocus="on"/>
        <input type="submit" value="Search" />
      </form>
      {/* <WeatherInfo data= {weatherData} /> */}
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.city}</li>
          <li>Temperature: {weatherData.temperature} °C</li>
          <li>Description: {weatherData.descriptiondescription}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {weatherData.wind} m/s</li>
          <li><img src={weatherData.icon} alt="current weather icon" className="float-top" /></li>
        </ul>
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
