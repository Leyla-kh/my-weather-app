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
  let hour = props.unFormatDate.getHours();
  if (hour < 10) hour = `0${hour}`;
  let minutes = props.unFormatDate.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  return (
    <div>
      {days[props.unFormatDate.getDay()]}
      {" , "}
      {hour} : {minutes}
    </div>
  );
}
