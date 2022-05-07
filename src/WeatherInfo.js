import React from "react";
// import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  console.log(props);
  return (

    <div className="Weather Info">
    <div className="weather-forecast-day">
        <div className="row">
        <div className="col-6">
        <ul>
                {/* <FormattedDate date={props.data.date} /> */}

    <li className="last-updated"><span><em>Last updated:</em></span>{props.date}</li>
              <h2 className="user-city">
                <span>
                  <strong>{props.data.city}</strong>
                </span>
              </h2>
              <br />
              <a className="celcius-temp" href="/">
                {Math.round(props.data.temperature)}°
              </a>
              <span className="units">
                <button
                  href="/"
                  className="btn-celius btn btn-secondary btn-lg active m-2"
                  aria-pressed="true"
                >
                  C
                </button>
                <button
                  href="/"
                  className="btn btn-light btn-sm"
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
          <li><img src={props.data.icon} alt="current weather icon" className="float-top" /></li>
            <li className="text-capitalize"><strong>Description: </strong> {props.data.description}</li>
            <li><strong>Humidity: </strong>{props.data.humidity}%</li>
            <li><strong>Wind Speed: </strong> {props.data.wind} m/s</li>
          </ul>
          </div>
          </div>
      </div>
      </div>
      </div> 
  );
}