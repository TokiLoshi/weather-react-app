import React from "react";
import clearsky from "./images/01d.svg";
import clearnight from "./images/01n.svg";
import fewcloudsday from "./images/02d.svg";
import fewcloudsnight from "./images/02n.svg";
import scatteredCloudsDay from "./images/03d.svg";
import scatteredCloudsNight from "./images/03n.svg";
import brokenCloudsDay from "./images/04d.svg";
import brokenCloudsNight from "./images/04n.svg";
import showerRainDay from "./images/09d.svg";
import showerRainNight from "./images/09n.svg";
import rainDay from "./images/10d.svg";
import rainNight from "./images/10d.svg";
import thunderstormDay from "./images/11d.svg";
import thunderstormNight from "./images/11n.svg";
import snowDay from "./images/13d.svg";
import snowNight from "./images/13n.svg";
import mistDay from "./images/50d.svg";
import mistNight from "./images/50d.svg";

export default function WeatherIcon(props) {
const codeMapping ={
"01d": clearsky,
"01n": clearnight,
"02d": fewcloudsday,
"02n": fewcloudsnight,
"03d": scatteredCloudsDay,
"03n": scatteredCloudsNight,
"04d": brokenCloudsDay,
"04n": brokenCloudsNight,
"09d": showerRainDay,
"09n": showerRainNight,
"10d": rainDay,
"10n": rainNight,
"11d": thunderstormDay,
"11n": thunderstormNight,
"13d": snowDay,
"13n": snowNight,
"50d": mistDay,
"50n": mistNight
};


  return (
 <div>

 <img src={codeMapping[props.code]} alt={props.description} width={props.size}/>

    </div>
  );

}