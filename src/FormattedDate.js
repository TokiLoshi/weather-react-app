import React from "react";

export default function FormattedDate(props) {
  let days = ["Suday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[props.date.getMonth()];
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0{minutes}`;
  }
  if (hours < 10) {
    hours = `0{hours}`;
  }
  return (
    <h4>{day}, {month}, {hours}:{minutes}</h4>
   
  );
}