import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  // console.log(props);
  return (

    <div className="Weather Info">
    <div className="weather-forecast-day">
        <div className="container">
        <div className="row">
        <div className="col-6 d-flex">
        <ul>
                <FormattedDate date={props.data.date} />

        <h2 className="user-city ms-2">
                <span>
                  <strong>{props.data.city}</strong>
                </span>
              </h2>
              <br />

<WeatherTemperature celcius={props.data.temperature} />


            </ul>
  
        </div> 
    <div className="col-6">
    <div className= "weather-conditions">
          <ul>
            <div className="float-top">
            <WeatherIcon code={props.data.icon} size={150}/>
            </div>
            <li className="text-capitalize"><strong>Description: </strong> {props.data.description}</li>
            <li><strong>Humidity: </strong>{props.data.humidity}%</li>
            <li><strong>Wind Speed: </strong> {props.data.wind} m/s</li>
          </ul>
          </div>
          </div>
      </div>
      </div>
      </div> 
      </div>
  );
}