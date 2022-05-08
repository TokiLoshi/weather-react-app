import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) { 
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

useEffect(() => {
setLoaded(false);
}, [props.coordinates]);

function handleResponse(response) {
  setForecastData(response.data.daily);
  setLoaded(true);
}
function load() {
  const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
  // const apiKey = "85b2f9ddbf909c56fc814cf91c0ccce6";
  const apiKey = "5f2546aa7530dc977682fdfc6556f973";
  const units = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
   axios.get(apiUrl).then(handleResponse);  
}


if (loaded) { 
return (
  
  <div className="WeatherForecast">
      <h4>Your 5 day forecast</h4>
    <div className="row">
      {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
        return ( 
          <div className="col" key={index}> 
          <WeatherForecastDay data={dailyForecast} />
          </div>
        ); 
      } else {
        return null;
      }
        })} 
    </div>
  </div>
);
}
else {
load();
 return null;

}
}