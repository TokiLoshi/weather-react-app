import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maxTemperature() {
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°`;
}
function minTemperature() {
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}°`;
}
function day() {
  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = date.getDay();
  return days[day];
}

  return (
<div>
<div className="WeatherForecast-day"><strong>{day()}</strong></div>
<WeatherIcon code={props.data.weather[0].icon} size={90} />
<div className="WeatherForecast-temperature">
  <span className="WeatherForecast-temperature-min"><strong>{maxTemperature()} |</strong></span>
  <span className="WeatherForecast-temperature-min">{minTemperature()} C</span>
  </div>
  </div>
  ); 

}