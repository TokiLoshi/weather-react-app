import React, { useState } from "react";

export default function weatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit ==="celcius") {
  return (
<ul className="ms-3">
<a className="celcius-temp" href="/">
                {Math.round(props.celcius)}°
              </a>
              <span className="units">
                <button
                  href="/"
                  className="btn-celius btn btn-secondary btn-lg active m-2"
                  aria-pressed="true" onClick={showCelcius}
                >
                  C
                </button>
                <button
                  href="/"
                  className="btn btn-light btn-sm"
                  aria-pressed="false" onClick={showFahrenheit}
                >
                  / F
                </button>
              </span>
</ul>
  ); 
  } else {
    let fahrenheit= (props.celcius * 9)/5 +32;
    return (
      <ul className="ms-3">
      <a className="celcius-temp" href="/">
                      {Math.round(fahrenheit)}°
                    </a>
                    <span className="units">
                      <button
                        href="/"
                        className="btn-celius btn btn-secondary btn-lg active m-2"
                        aria-pressed="false" onClick={showFahrenheit}
                      >
                        F
                      </button>
                      <button
                        href="/"
                        className="btn btn-light btn-sm"
                        aria-pressed="true" onClick={showCelcius}
                      >
                        / C
                      </button>
                    </span>
      </ul>
 
      );  }
}