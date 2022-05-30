import React from "react";

export default function FormatedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = props.date.getHours();
  if (hour < 10) hour = `0{hour}`;
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0{hour}`;
  return (
    <div>
      {days[props.date.getDay()]}
      {" , "}
      {hour} : {minutes}
    </div>
  );
}
