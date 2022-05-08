import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) { 
function handleResponse(response) {
  console.log(response.data);
}
console.log(props);

const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
const units = "metric";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
 axios.get(apiUrl).then(handleResponse);

return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col">
       <div className="WeatherForecast-day">Thu</div>
      <WeatherIcon code="01d" size={90} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-min">10° |</span>
        <span className="WeatherForecast-temperature-min"> 19° C</span>
      </div>
      </div>
    </div>
  </div>
);
}