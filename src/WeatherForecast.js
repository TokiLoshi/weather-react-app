import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) { 
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

function handleResponse(response) {
  setForecastData(response.data.daily);
  setLoaded(true);
}

if (loaded) { 
  console.log(forecastData);
return (
  
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
      <WeatherForecastDay data={forecastData[0]} />
      </div>
    </div>
  </div>
);
}
else {
const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
const units = "metric";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
 axios.get(apiUrl).then(handleResponse);

}
}